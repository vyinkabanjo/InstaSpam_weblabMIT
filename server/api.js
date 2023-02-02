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

// import JSDOM library for parsing HTML content
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// import authentication library
const auth = require("./authFunctions");

// Import fetch function for use when fetching (get requests) from the Microsoft Graph API
const { fetch } = require("./fetch");

// Import update read function
const { updateRead } = require("./fetch");

// Import flagging function
const { updateFlagged } = require("./fetch");

const { getOutlookImage } = require("./fetch");

// Import MS Graph Endpoint for current user from authConfig
const { GRAPH_ME_ENDPOINT } = require("./authConfig");

const { DORM_SPAM_FILTER } = require("./authConfig");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socketManager = require("./server-socket");

const { ensureLoggedIn } = require("./authFunctions");
const { refreshToken } = require("./msal-auth");
const { UrlString } = require("@azure/msal-common");

/**
 * Parses links from `email_content`, returning an array of strings
 * @param {String} email_content the email's HTML content
 */
const getLinks = (email_content) => {
  const linkExp = /<a\s*href=\s*\"(\S+)"/gm; // debug here: https://regex101.com/r/w86CWw/1
  const unfiltered_links = Array.from(email_content.matchAll(linkExp), (m) => m[1]); //uses the regex capturing group to get the actual link value
  const mailto = /mailto:\S+/gm;
  const filtered_links = unfiltered_links.filter((link, index) => {
    //remove duplicate links and mailto links
    return !mailto.test(link) && unfiltered_links.indexOf(link) === index;
  });
  // TODO: Filter links (remove "mailto:" links, or format them differently on the frontend) (can be done with .filter() method)
  // Also add "https://" to links that don't have them, and maybe also move to backend
  // Potentially also generate "short" domain names here? (i.e. "https://google.com/..." ==> "google.com")
  return filtered_links;
};

const getImages = (email_content) => {
  const imageExp = /<img.*?src="(\S+)"/gm;
  const inlineImages = Array.from(email_content.matchAll(imageExp), (m) => m[1]); //uses the regex capturing group to get the actual image src
  return inlineImages;
};

//Makes dates from chronos "dates" object
function filterDates(dates, strictness) {
  // When chronos parses dates, it returns fields for "start" and "end",
  // Those fields have a "knownValues" component which says the values that chronos is sure about when parsing
  // We just want to remove dates that Chronos isn't too sure about
  const usableDates = dates.filter((date) => {
    return (
      Object.keys(date.start.knownValues).length >= strictness && date.text !== "now"
      // date.start.isCertain("year") &&
      // date.start.isCertain("month") &&
      // date.start.isCertain("day")
    );
  });

  // Filter out unique dates using the reduce method
  const uniqueDates = usableDates.reduce((accumulator, current) => {
    if (
      !accumulator.find((date) => date.start.date().getTime() === current.start.date().getTime())
    ) {
      // console.log("ACCEPTED DATE", current.start.date());
      accumulator.push(current);
    } else {
      // console.log("Duplicate DATE", current.start.date());
    }
    return accumulator;
  }, []);
  return uniqueDates;
}

// Function to get Dates from email content, with a reference date at "timeSent"
const getDates = (email_content, timeSent) => {
  const referenceDate = new Date(timeSent);

  const dom = new JSDOM(email_content);
  const body = dom.window.document.querySelector("body").textContent; //Strips out HTML content and leaves body text

  // Chrono Documentation: https://github.com/wanasit/chrono
  const dates = filterDates(chrono.parse(body, referenceDate), 3);
  return JSON.stringify(
    dates.map((date) => {
      return date.end != undefined
        ? {
            time: date.start.date().getTime(),
            end: date.end.date().getTime(),
            displayTime: date.start.isCertain("hour"),
          }
        : {
            time: date.start.date().getTime(),
            displayTime: date.start.isCertain("hour"),
          };
    })
  );
};

/**
 * Returns a new Email object that condenses information from the Microsoft Graph API
 * @param {Object} email email object from Microsoft Graph API
 * @returns
 */
function parseEmail(email, req) {
  return new Email({
    senderEmail: email.from.emailAddress.address,
    senderName: email.from.emailAddress.name,
    header: email.subject,
    hasAttachment: email.hasAttachments,
    // attachments: [
    //   getOutlookImage(
    //     "https://graph.microsoft.com/v1.0/me/mailFolders/inbox/messages/AAMkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5MGYxOQBGAAAAAADUUd0brNnoRIN5P34i1rIFBwB61lxwDLvUQqZrtY0R3GwIAAAAAAEMAAAP9LzBTsYnT6xwROru1J9IAAGMHagnAAA=/attachments",
    //     req.session.accessToken,
    //     req.session.csrfToken
    //   ),
    // ],
    attachments: getImages(email.body.content),
    emailID: email.id,
    content: email.body.content,
    links: getLinks(email.body.content),
    times: [],
    relevantDates: getDates(email.body.content, email.createdDateTime),
    venue: "",
    emailURL: email.webLink,
    isRead: email.isRead,
    isFlagged: email.flag.flagStatus,
    timeReceived: email.receivedDateTime,
  });
}

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
// get user info

router.get("/user", (req, res) => {
  User.findById(req.query.userID)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.status(500).send({ status: 500, error: err });
    });
});

// get emails using Microsoft Graph API
router.get("/emails", ensureLoggedIn, refreshToken, async (req, res, next) => {
  try {
    const graphResponse = await fetch(
      GRAPH_ME_ENDPOINT + "/messages/" + DORM_SPAM_FILTER + "&$skip=" + String(req.query.skip),
      req.session.accessToken
    );

    //TODO: Basic data transformation for now, do more with this
    // TODO: Do something if "@odata.nextLink" property exists in the graphResponse
    res.send(graphResponse.value.map((email) => parseEmail(email, req)));
  } catch (error) {
    res.status(500);
    next(error);
  }
});

// flag email on feed
router.post("/flag", ensureLoggedIn, refreshToken, (req, res, next) => {
  // store flagged email in database
  const flagEmail = new FlagEmail({
    userID: req.body.userID,
    subject: req.body.subject,
    emailID: req.body.emailID,
  });
  flagEmail.save().then(() => {
    res.send(flagEmail);
  });
  // update flagged email on Outlook itself
  const message = {
    flag: {
      flagStatus: "Flagged",
    },
  };
  try {
    updateFlagged(
      GRAPH_ME_ENDPOINT + "/messages/",
      req.session.csrfToken,
      req.session.accessToken,
      message,
      req.body.emailID
    );

    //TODO: Basic data transformation for now, do more with this
  } catch (error) {}
});

router.post("/unflag", ensureLoggedIn, refreshToken, (req, res, next) => {
  FlagEmail.deleteOne({ emailID: req.body.emailID }).then(() => {
    res.send({ success: true });
  });
  // update flagged email on Outlook itself
  const message = {
    flag: {
      flagStatus: "notFlagged",
    },
  };
  try {
    updateFlagged(
      GRAPH_ME_ENDPOINT + "/messages/",
      req.session.csrfToken,
      req.session.accessToken,
      message,
      req.body.emailID
    );
    //TODO: Basic data transformation for now, do more with this
  } catch (error) {}
});

router.get("/read", (req, res) => {
  ReadEmail.find({ userID: req.query.userID })
    .then((emailsRead) => {
      let excludedEmails = emailsRead.map((emails) => emails.emailID);
      res.send(excludedEmails);
    })
    .catch((err) => {
      res.send({ success: false });
    });
});

router.post("/read", ensureLoggedIn, (req, res) => {
  // TODO: uncomment this code later so that the posting to DB still works
  // OR only return unread emails from user's email

  const readEmail = new ReadEmail({
    userID: req.body.userID,
    subject: req.body.subject,
    emailID: req.body.emailID,
  });

  readEmail.save().then(() => {
    res.send(readEmail);
  });

  try {
    updateRead(
      GRAPH_ME_ENDPOINT + "/messages/",
      req.session.csrfToken,
      req.session.accessToken,
      req.body.emailID
    );
  } catch (error) {
    res.status(500);
    next(error);
  }
});

router.get("/flag", (req, res) => {
  FlagEmail.find({ userID: req.query.userID })
    .then((emailsFlagged) => {
      let flaggedEmails = emailsFlagged.map((emails) => emails.emailID);
      res.send(flaggedEmails);
    })
    .catch((err) => {
      res.send({ success: false });
    });
});

router.post("/militarySetting", (req, res) => {
  User.updateOne({ _id: req.body.userID }, { militaryClockDisplay: req.body.status })
    .then(() => {})
    .catch((err) => {
      res.send({ success: false });
    });
});

router.post("/readEmailSetting", (req, res) => {
  User.updateOne({ _id: req.body.userID }, { readEmailsDisplay: req.body.status })
    .then(() => {})
    .catch((err) => {
      res.send({ success: false });
    });
});

router.get("/militarySetting", (req, res) => {
  User.findOne({ _id: req.query.userID })
    .then((doc) => {
      res.send(doc.militaryClockDisplay);
    })
    .catch((err) => {
      res.send({ success: false });
    });
});

router.get("/readEmailSetting", (req, res) => {
  User.findOne({ _id: req.query.userID })
    .then((doc) => {
      res.send(doc.readEmailsDisplay);
    })
    .catch((err) => {
      res.send({ success: false });
    });
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
