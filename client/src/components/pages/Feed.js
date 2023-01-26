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
  const rawHTML = email_content;
  const doc = document.createElement("html");
  doc.innerHTML = rawHTML;
  const links = doc.getElementsByTagName("a");
  const urls = [];

  for (let i = 0; i < links.length; i++) {
    urls.push(links[i].getAttribute("href"));
  }
  return urls;
  // console.log(urls);
};

const Feed = (props) => {
  const [emails, emailSetter] = useState([]);
  const [readEmailIDs, emailsReadSetter] = useState([]);

  useEffect(() => {
    //TODO: Replace this with an API call
    get("/api/read").then((readEmails) => {
      emailsReadSetter(readEmails);
    });
    get("/api/emails").then((emailObjs) => {
      // apply a filter here for things in the api/read!
      emailSetter(emailObjs);
    });
    //TODO: get flagged emails to display on the user's profile
  }, [readEmailIDs]);
  const ReadEmail = (email_ID, subject) => {
    post("/api/read", { userID: props.userId, emailID: email_ID, subject: subject }).then(() => {
      emailsReadSetter(readEmailIDs);
    });
  };
  const FlagEmail = (email_ID, subject) => {
    post("/api/flag", { userID: props.userId, emailID: email_ID, subject: subject });
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
