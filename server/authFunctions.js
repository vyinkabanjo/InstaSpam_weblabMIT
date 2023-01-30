const User = require("./models/user");
const socketManager = require("./server-socket");

// gets user from DB, or makes a new account if it doesn't exist yet
// TODO: move to msal-auth signin (do it on signin)
function getOrCreateUser(user) {
  // the "sub" field means "subject", which is a unique identifier for each user
  return User.findOne({ microsoftid: user.homeAccountId }).then((existingUser) => {
    if (existingUser) return existingUser;

    const newUser = new User({
      name: user.name,
      microsoftid: user.homeAccountId,
    });

    return newUser.save();
  });
}

// Populates req.session.user with database information based on the "account" field in req.
function loginFromDB(req, res) {
  return getOrCreateUser(req.session.account)
    .then((user) => {
      // persist user in the session
      req.session.user = user;
      res.send(user);
    })
    .catch((err) => {
      console.log(`Failed to log in: ${err}`);
      res.status(401).send({ err });
    });
}

function logout(req, res) {
  req.session.user = null;
  res.send({});
}

function populateCurrentUser(req, res, next) {
  // simply populate "req.user" for convenience
  req.user = req.session.user;
  next();
}

function ensureLoggedIn(req, res, next) {
  if (!req.user) {
    return res.status(401).send({ err: "not logged in" });
  }

  next();
}

// custom middleware to check auth state
function isAuthenticated(req, res, next) {
  if (!req.session.isAuthenticated) {
    return res.redirect("/auth/signin"); // redirect to sign-in route
  }

  next();
}

module.exports = {
  loginFromDB,
  logout,
  getOrCreateUser,
  populateCurrentUser,
  ensureLoggedIn,
  isAuthenticated,
};
