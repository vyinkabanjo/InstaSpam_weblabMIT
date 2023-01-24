import React, { useState, useEffect } from "react";

import "../../utilities.css";
import "./Feed.css";
import Post from "./Post";

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

const Feed = (props) => {
  const [emails, emailSetter] = useState([]);

  useEffect(() => {
    //TODO: Replace this with an API call
    get("/api/emails").then((emailObjs) => {
      emailSetter(emailObjs);
    });
    // emailSetter(testEmails);
  }, []);

  let emailsList = null;
  const hasEmails = emails.length !== 0;

  if (hasEmails) {
    emailsList = emails.map((emailObj,id) => {
      <Post
          key={id}
          // content={emailObj.content}
          attachments={emailObj.attachments}
          senderEmail={emailObj.senderEmail}
          senderName = {emailObj.senderName}
          header = {emailObj.header}
          timeReceived = {emailObj.timeReceived}
          emailURL = {emailObj.emailURL}
          links = {emailObj.links}
          dates = {emailObj.relevantDates}
          times = {emailObj.times}
          isRead = {emailObj.isRead}
          isFlagged = {emailObj.isFlagged}

      />
    }
  }

  return (
    <section className="u-flexColumn Feed-container">
      {emailsList}
    </section>
  );
};

export default Feed;
