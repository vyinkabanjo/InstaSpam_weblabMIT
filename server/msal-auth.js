/*
 * Part of this code is adapted from Microsoft's "MS-Identity-Node" example
 * for working with the MSAL library. Find more here:
 * https://github.com/Azure-Samples/ms-identity-node
 */

const express = require("express");
const msal = require("@azure/msal-node");

const { msalConfig, REDIRECT_URI, POST_LOGOUT_REDIRECT_URI } = require("./authConfig");
const authFunctions = require("./authFunctions");

const router = express.Router();
const msalInstance = new msal.ConfidentialClientApplication(msalConfig);
const cryptoProvider = new msal.CryptoProvider();

/**
 * Prepares the auth code request parameters and initiates the first leg of auth code flow
 * @param req: Express request object
 * @param res: Express response object
 * @param next: Express next function
 * @param authCodeUrlRequestParams: parameters for requesting an auth code url
 * @param authCodeRequestParams: parameters for requesting tokens using auth code
 */
async function redirectToAuthCodeUrl(
  req,
  res,
  next,
  authCodeUrlRequestParams,
  authCodeRequestParams
) {
  // Generate PKCE Codes before starting the authorization flow
  const { verifier, challenge } = await cryptoProvider.generatePkceCodes();

  // Set generated PKCE codes and method as session vars
  req.session.pkceCodes = {
    challengeMethod: "S256",
    verifier: verifier,
    challenge: challenge,
  };

  /**
   * By manipulating the request objects below before each request, we can obtain
   * auth artifacts with desired claims. For more information, visit:
   * https://azuread.github.io/microsoft-authentication-library-for-js/ref/modules/_azure_msal_node.html#authorizationurlrequest
   * https://azuread.github.io/microsoft-authentication-library-for-js/ref/modules/_azure_msal_node.html#authorizationcoderequest
   **/

  req.session.authCodeUrlRequest = {
    redirectUri: REDIRECT_URI,
    responseMode: "form_post", // recommended for confidential clients
    codeChallenge: req.session.pkceCodes.challenge,
    codeChallengeMethod: req.session.pkceCodes.challengeMethod,
    ...authCodeUrlRequestParams,
  };

  req.session.authCodeRequest = {
    redirectUri: REDIRECT_URI,
    code: "",
    ...authCodeRequestParams,
  };

  // Get url to sign user in and consent to scopes needed for application
  try {
    const authCodeUrlResponse = await msalInstance.getAuthCodeUrl(req.session.authCodeUrlRequest);
    res.redirect(authCodeUrlResponse);
  } catch (error) {
    next(error);
  }
}

router.get("/signin", async function (req, res, next) {
  // create a GUID for crsf
  const host = req.headers.host;
  const extension = ""; // page on the host site to redirect back to, blank for now

  console.log("Accsessing end point from HOST:", host); // prints host field from the header
  req.session.csrfToken = cryptoProvider.createNewGuid();

  /**
   * The MSAL Node library allows you to pass your custom state as state parameter in the Request object.
   * The state parameter can also be used to encode information of the app's state before redirect.
   * You can pass the user's state in the app, such as the page or view they were on, as input to this parameter.
   */
  const state = cryptoProvider.base64Encode(
    JSON.stringify({
      csrfToken: req.session.csrfToken,
      redirectTo: "http://" + host + extension, // Redirect URL after filling out login form
    })
  );

  const authCodeUrlRequestParams = {
    state: state,

    /**
     * By default, MSAL Node will add OIDC scopes to the auth code url request. For more information, visit:
     * https://docs.microsoft.com/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
     */
    scopes: ["Mail.ReadWrite"], // Allows us to get silent tokens later for the Graph API
  };

  const authCodeRequestParams = {
    /**
     * By default, MSAL Node will add OIDC scopes to the auth code request. For more information, visit:
     * https://docs.microsoft.com/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
     */
    scopes: ["Mail.ReadWrite"],
  };

  // trigger the first leg of auth code flow
  return redirectToAuthCodeUrl(req, res, next, authCodeUrlRequestParams, authCodeRequestParams);
});

// Gets all accounts stored in the MSAL token cache
router.get("/getAccounts", async function (req, res, next) {
  const msalTokenCache = msalInstance.getTokenCache();
  const cachedAccounts = await msalTokenCache.getAllAccounts();
  console.log("Accounts:", cachedAccounts);
  res.send(cachedAccounts);
});

// Gets microsoft access token (used for testing)
router.get("/accessToken", async function (req, res, next) {
  res.send(req.session.accessToken);
});

router.get("/acquireToken", async function (req, res, next) {
  // Can't get an access token for Graph API if we haven't authenticated ourselves
  if (!req.session.isAuthenticated) {
    res.status(401); // unauthorized error code
    res.send({
      status: 401,
      message: "Must first sign in via /auth/signin endpoint before getting access token.",
    });
  }

  const silentRequest = {
    account: req.session.account,
    scopes: ["User.Read", "Mail.ReadWrite"],
  };

  // Get token silently
  msalInstance
    .acquireTokenSilent(silentRequest)
    .then((tokenResponse) => {
      // tokenResponse has a lot of fields, but we only need a few
      console.log("SILENT TOKEN RESPONSE:", tokenResponse);

      // Update Session with new access tokens/id tokens
      req.session.accessToken = tokenResponse.accessToken;
      req.session.idToken = tokenResponse.idToken;
      req.session.account = tokenResponse.account;

      // If we specify a "redir" field in the query parameters,
      // we'll redirect to that redirect url after getting the token
      redirect_url = req.query.redir;
      console.log("REDIRECT URL: ", redirect_url);
      redirect_url ? res.redirect(redirect_url) : res.send(tokenResponse);
    })
    .catch((error) => {
      res.status(500); // Internal server error
      res.send({
        status: 500,
        message:
          "Internal server error. Somehow you're authenticated yet a silent request to get an API access token failed.",
      });
    });
});

router.post("/redirect", async function (req, res, next) {
  if (req.body.state) {
    const state = JSON.parse(cryptoProvider.base64Decode(req.body.state));

    // check if csrfToken matches
    if (state.csrfToken === req.session.csrfToken) {
      req.session.authCodeRequest.code = req.body.code; // authZ code
      req.session.authCodeRequest.codeVerifier = req.session.pkceCodes.verifier; // PKCE Code Verifier

      try {
        const tokenResponse = await msalInstance.acquireTokenByCode(req.session.authCodeRequest);
        req.session.accessToken = tokenResponse.accessToken;
        req.session.idToken = tokenResponse.idToken;
        req.session.account = tokenResponse.account; // We use the account for silent token requests

        // This section controls whether we go to the "acquireToken" endpoint to get a token for calling the graph API
        // This may not be needed since our original sign in token already gives us permissions.
        if (req.session.isAuthenticated) {
          // If the user's already been authenticated, just redirect back to the original site
          res.redirect(state.redirectTo);
        } else {
          req.session.isAuthenticated = true;

          //Get the user from the database
          authFunctions
            .getOrCreateUser(req.session.account)
            .then((user) => {
              // persist user in the session
              req.session.user = user;
              // redirect to get an access token
              res.redirect("/auth/acquireToken?redir=" + encodeURIComponent(state.redirectTo));
            })
            .catch((err) => {
              console.log(`Failed to log in: ${err}`);
              res.status(401).send({ err });
            });
        }
      } catch (error) {
        next(error);
      }
    } else {
      next(new Error("csrf token does not match"));
    }
  } else {
    next(new Error("state is missing"));
  }
});

router.post("/signout", function (req, res) {
  /**
   * Construct a logout URI and redirect the user to end the
   * session with Azure AD. For more information, visit:
   * https://docs.microsoft.com/azure/active-directory/develop/v2-protocols-oidc#send-a-sign-out-request
   */
  const logoutUri = `${msalConfig.auth.authority}/oauth2/v2.0/logout?post_logout_redirect_uri=${POST_LOGOUT_REDIRECT_URI}`;

  req.session.destroy(() => {
    // res.redirect(logoutUri); // No reason to redirect user to sign out of their microsoft account imo
  });
});

//TODO: define functions for login, logout, than can be used in the frontend like in "auth.js"
// Login function would need to close the browser window or redirect back to main application: https://stackoverflow.com/questions/19583328/close-browser-tab-nodejs
// Maybe think about using middleware?
// Need to populate userID fields and all that

module.exports = router;
