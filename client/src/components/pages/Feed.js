import React, { useState, useEffect } from "react";
import "../../utilities.css";
import "./Feed.css";
import Post from "./Post";
import { get, post } from "../../utilities";

/**
 * Feed is the component containing the list of posts
 *
 * Proptypes
 * @param {string} user_id user id of the client
 */

const getLinks = (email_content) => {
  const linkExp = /<a\s*href=\s*\"(\S+)"/gm; // debug here: https://regex101.com/r/w86CWw/1
  const unfiltered_links = Array.from(email_content.matchAll(linkExp), (m) => m[1]); //uses the regex capturing group to get the actual link value

  // TODO: Filter links (remove "mailto:" links, or format them differently on the frontend) (can be done with .filter() method)
  // Also add "https://" to links that don't have them, and maybe also move to backend
  // Potentially also generate "short" domain names here? (i.e. "https://google.com/..." ==> "google.com")
  return unfiltered_links;
};
// TODO: Add date indicators between posts
const Feed = (props) => {
  const [emails, emailSetter] = useState([]);
  const [readEmailIDs, emailsReadSetter] = useState([]);
  const [triggerReload, setTriggerReload] = useState(0);

  useEffect(() => {
    console.log("triggering use effect");
    get("/api/read", { userID: props.userID }).then((readEmails) => {
      console.log(readEmails);
      emailsReadSetter(readEmails);
    });
    get("/api/emails").then((emailObjs) => {
      // apply a filter here for things in the api/read!
      emailSetter(emailObjs);
    });
    //TODO: get flagged emails to display on the user's profile
  }, [triggerReload]);

  // Functions for changing emails
  //TODO: Standardize "userId" to be "userID",
  // also try and avoid updating realtime synchronously after DB entry in case of a slow DB
  const ReadEmail = (email_ID, subject) => {
    post("/api/read", { userID: props.userID, emailID: email_ID, subject: subject }).then(() => {
      setTriggerReload(triggerReload + 1);
    });
  };
  const FlagEmail = (email_ID, subject) => {
    post("/api/flag", { userID: props.userID, emailID: email_ID, subject: subject });
  };

  let emailsList = null;
  const hasEmails = emails.length !== 0;

  if (hasEmails) {
    emailsList = emails.filter((email) => !readEmailIDs.includes(email.emailID));
    emailsList = emailsList.map((emailObj, id) => {
      emailObj.links = getLinks(emailObj.content);
      return <Post key={id} emailData={emailObj} readEmail={ReadEmail} flagEmail={FlagEmail} />;
    });
  }

  return <section className="u-flexColumn Feed-container">{emailsList}</section>;
};

export default Feed;
