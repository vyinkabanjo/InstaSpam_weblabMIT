import React, { useState, useEffect } from "react";

import "../../utilities.css";
import "./Feed.css";
import Post from "./Post";
import { get, post } from "../../utilities";

// Test emails for ensuring the front end works correctly
const testEmails = [
  {
    content: {
      subject: "Volunteer to be a Blueprint 2023 Mentor",
      dates: ["2/18", "2/19"],
      links: [
        "https://docs.google.com/forms/d/e/1FAIpQLSeP8qEUv5QPr1D0zD9yUPYvM-DhGfroXMhvwsEnIbCgPL7fAA/viewform",
      ],
      times: ["7-8:30pm EST"],
      venues: [],
    },
    attachments: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/SIPI_Jelly_Beans_4.1.07.tiff/lossy-page1-256px-SIPI_Jelly_Beans_4.1.07.tiff.jpg",
    ],
    senderInfo: {
      sender: "Daniel X Hong",
      senderEmail: "dhong@mit.edu",
      time: "Thu 1/12/2023 4:58PM",
    },
  },
  {
    content: {
      subject: "Introducing OpenCode @ MIT!",
      dates: ["Monday, 16 January"],
      links: ["https://mit.zoom.us/j/99427694577#success"],
      times: ["2pm EST"],
      venues: ["5-134"],
    },
    attachments: [],
    senderInfo: {
      sender: "Abutalib Namazov",
      senderEmail: "abutalib@mit.edu",
      time: "Thu 1/12/2023 10:55 AM",
    },
  },
];

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
  }, []);
  const ReadEmail = (email_ID, subject) => {
    // post("/api/read", { userId: props.userId, emailID: email_ID });
    post("/api/read", { emailID: email_ID, subject: subject });
  };
  const FlagEmail = (email_ID, subject) => {
    post("/api/flag", { emailID: email_ID, subject: subject });
    // post("/api/flag", { userId: props.userId, emailID: email_ID });
    // TODO: add code to change the color of the flag icon to red?
  };

  console.log(readEmailIDs);

  let emailsList = null;
  const hasEmails = emails.length !== 0;

  if (hasEmails) {
    emailsList = emails.filter((email) => !readEmailIDs.includes(email.emailID));
    emailsList = emailsList.map((emailObj, id) => (
      <Post
        key={id}
        // content={emailObj.content}
        emailID={emailObj.emailID}
        attachments={emailObj.attachments}
        senderEmail={emailObj.senderEmail}
        senderName={emailObj.senderName}
        header={emailObj.header}
        timeReceived={emailObj.timeReceived}
        emailURL={emailObj.emailURL}
        links={getLinks(emailObj.content)}
        dates={emailObj.relevantDates}
        venue={emailObj.venue}
        times={emailObj.times}
        isRead={emailObj.isRead}
        isFlagged={emailObj.isFlagged}
        readEmail={ReadEmail}
        flagEmail={FlagEmail}
      />
    ));
    console.log(emailsList);
  }

  return <section className="u-flexColumn Feed-container">{emailsList}</section>;
};

export default Feed;
