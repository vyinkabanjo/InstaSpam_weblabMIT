/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/
const express = require("express");

// import models so we can interact with the database
const User = require("./models/user");
const Email = require("./models/email");
const ReadEmail = require("./models/readEmail");
const FlagEmail = require("./models/flagged");

// import chrono library for parsing dates and times
const chrono = require("chrono-node");

// import authentication library
const auth = require("./authFunctions");

// Import fetch function for use when fetching (get requests) from the Microsoft Graph API
const fetch = require("./fetch");

// Import MS Graph Endpoint from authConfig
const { GRAPH_ME_ENDPOINT } = require("./authConfig");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socketManager = require("./server-socket");

const { ensureLoggedIn } = require("./authFunctions");

/**
 * Parses links from `email_content`, returning an array of strings
 * @param {String} email_content the email's HTML content
 */
const getLinks = (email_content) => {
  const linkExp = /<a\s*href=\s*\"(\S+)"/gm; // debug here: https://regex101.com/r/w86CWw/1
  const unfiltered_links = Array.from(email_content.matchAll(linkExp), (m) => m[1]); //uses the regex capturing group to get the actual link value

  // TODO: Filter links (remove "mailto:" links, or format them differently on the frontend) (can be done with .filter() method)
  // Also add "https://" to links that don't have them, and maybe also move to backend
  // Potentially also generate "short" domain names here? (i.e. "https://google.com/..." ==> "google.com")
  return unfiltered_links;
};

/**
 * Returns a new Email object that condenses information from the Microsoft Graph API
 * @param {Object} email email object from Microsoft Graph API
 * @returns
 */
function parseEmail(email) {
  return new Email({
    senderEmail: email.from.emailAddress.address,
    senderName: email.from.emailAddress.name,
    header: email.subject,
    hasAttachment: email.hasAttachments,
    attachments: [],
    emailID: email.id,
    content: email.body.content,
    links: getLinks(email.body.content),
    times: [],
    relevantDates: String(chrono.parseDate(email.body.content)),
    venue: "",
    emailURL: email.webLink,
    isRead: email.isRead,
    isFlagged: email.flag.flagStatus,
    timeReceived: email.receivedDateTime,
  });
}

// Replaced by /auth/signin and /auth/signout for now
// router.post("/login", auth.loginFromDB);
// router.post("/logout", auth.logout);

router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user)
    socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

// get emails using Microsoft Graph API
router.get("/emails", ensureLoggedIn, async (req, res, next) => {
  console.log("Getting Emails");
  try {
    const graphResponse = await fetch(GRAPH_ME_ENDPOINT + "/messages/", req.session.accessToken);

    //TODO: Basic data transformation for now, do more with this
    // TODO: Do something if "@odata.nextLink" property exists in the graphResponse
    res.send(graphResponse.value.map((email) => parseEmail(email)));
  } catch (error) {
    res.status(500);
    next(error);
  }
});

// flag email on feed
router.post("/flag", auth.ensureLoggedIn, (req, res) => {
  const flagEmail = new FlagEmail({
    userID: req.body.userID,
    subject: req.body.subject,
    emailID: req.body.emailID,
  });
  flagEmail.save().then(() => {
    res.send(flagEmail);
  });
});

router.get("/read", (req, res) => {
  // console.log("getting read");
  // TODO: use the userID to narrow in on the find
  ReadEmail.find({ userID: req.query.userID })
    .then((emailsRead) => {
      // console.log(emailsRead);
      let excludedEmails = emailsRead.map((emails) => emails.emailID);
      res.send(excludedEmails);
    })
    .catch((err) => {
      res.send({ success: false });
    });
});

router.post("/read", auth.ensureLoggedIn, (req, res) => {
  // router.post("/read", (req, res) => {
  // console.log("posting read");
  const readEmail = new ReadEmail({
    userID: req.body.userID,
    subject: req.body.subject,
    emailID: req.body.emailID,
  });
  readEmail.save().then(() => {
    res.send(readEmail);
  });
});

router.get("/flag", (req, res) => {
  // console.log("getting read");
  // TODO: use the userID to narrow in on the find
  FlagEmail.find({ userID: req.query.userID })
    .then((emailsFlagged) => {
      // console.log(emailsRead);
      let flaggedEmails = emailsFlagged.map((emails) => emails.emailID);
      res.send(flaggedEmails);
    })
    .catch((err) => {
      res.send({ success: false });
    });
});

// DON'T NEED ANYMORE BUT JUST IN CASE NEED IN THE FUTURE!

const writeToDB = (email) => {
  const newEmail = new Email({
    senderEmail: email.from.emailAddress.address,
    senderName: email.from.emailAddress.name,
    header: email.subject,
    hasAttachment: email.hasAttachments,
    attachments: [],
    emailID: email.id,
    content: email.body.content,
    links: [],
    // links: getLinks(email.body.content),
    times: [],
    relevantDates: String(chrono.parseDate(email.body.content)),
    venue: "",
    emailURL: email.webLink,
    isRead: email.isRead,
    isFlagged: email.flag.flagStatus,
    timeReceived: email.receivedDateTime,
  });
  newEmail.save();
  return newEmail;
};
// function to return the
const parsedRawEmails = (rawEmailData) => {
  const parsedEmails = rawEmailData.map((email) => writeToDB(email));
  return parsedEmails;
};

// send dummy data to database
router.post("/emails", (req, res) => {
  const rawEmailData = GENERIC_EMAILS.value;
  parsedRawEmails(rawEmailData);
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
