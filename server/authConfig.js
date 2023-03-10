/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

require("dotenv").config();

/**
 * Configuration object to be passed to MSAL instance on creation.
 * For a full list of MSAL Node configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-node/docs/configuration.md
 */
const msalConfig = {
  auth: {
    clientId: process.env.CLIENT_ID, // 'Application (client) ID' of app registration in Azure portal - this value is a GUID
    authority: process.env.CLOUD_INSTANCE + process.env.TENANT_ID, // For Applications w/ Tenants
    clientSecret: process.env.CLIENT_SECRET, // Client secret generated from the app registration in Azure portal
  },
  system: {
    loggerOptions: {
      loggerCallback(loglevel, message, containsPii) {},
      piiLoggingEnabled: false,
      logLevel: "Info",
    },
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

const TOKEN_SCOPES = ["User.Read", "Mail.ReadWrite"];
const REDIRECT_URI = process.env.REDIRECT_URI;
const DORM_SPAM_FILTER = process.env.DORM_SPAM_FILTER;
const POST_LOGOUT_REDIRECT_URI = process.env.POST_LOGOUT_REDIRECT_URI;
const GRAPH_ME_ENDPOINT = process.env.GRAPH_API_ENDPOINT + "v1.0/me/mailFolders/inbox";

module.exports = {
  msalConfig,
  REDIRECT_URI,
  POST_LOGOUT_REDIRECT_URI,
  GRAPH_ME_ENDPOINT,
  DORM_SPAM_FILTER,
  TOKEN_SCOPES,
};
