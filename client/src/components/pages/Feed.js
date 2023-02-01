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

// TODO: Add date indicators between posts
const Feed = (props) => {
  // const [emails, emailSetter] = useState([]);
  // const [readEmailIDs, emailsReadSetter] = useState([]);
  // const [flaggedEmailIDs, emailsFlaggedSetter] = useState([]);
  // const [triggerRead, setTriggerRead] = useState(0);
  // const [triggerFlagged, setTriggerFlagged] = useState(0);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   console.log("triggering use effect");
  //   get("/api/read", { userID: props.userID }).then((readEmails) => {
  //     emailsReadSetter(readEmails);
  //   });
  // }, [triggerRead]);

  // useEffect(() => {
  //   get("/api/flag", { userID: props.userID }).then((flaggedEmails) => {
  //     // console.log(flaggedEmails);
  //     emailsFlaggedSetter(flaggedEmails);
  //   });
  // }, [triggerFlagged, props.userID]);

  // useEffect(() => {
  //   get("/api/emails").then((emailObjs) => {
  //     emailSetter(emailObjs);
  //     setIsLoading(false);
  //   });
  // }, []);

  // const ReadEmail = (email_ID, subject) => {
  //   post("/api/read", { userID: props.userID, emailID: email_ID, subject: subject }).then(() => {
  //     setTriggerRead(triggerRead + 1);
  //   });
  // };
  // const FlagEmail = (email_ID, subject) => {
  //   post("/api/flag", { userID: props.userID, emailID: email_ID, subject: subject }).then(() => {
  //     setTriggerFlagged(triggerFlagged + 1);
  //   });
  // };
  // const unflagEmail = (email_ID, subject) => {
  //   post("/api/unflag", { userID: props.userID, emailID: email_ID, subject: subject }).then(() => {
  //     setTriggerFlagged(triggerFlagged + 1);
  //   });
  // };

  let emailsList = null;
  const hasEmails = props.emailData.length !== 0;
  // const hasEmails = emails.length !== 0;

  // if (isLoading) {
  if (props.isLoading) {
    return <div className="u-flexColumn Feed-container">Loading</div>;
  }

  if (hasEmails) {
    emailsList = props.emailData.filter((email) => !props.readEmailIDs.includes(email.emailID));
    // emailsList = emails.filter((email) => !readEmailIDs.includes(email.emailID));
    emailsList = emailsList.map((emailObj, id) => {
      return (
        <Post
          key={id}
          emailData={emailObj}
          ReadEmail={props.ReadEmail}
          FlagEmail={props.FlagEmail}
          unflagEmail={props.unflagEmail}
          flaggedEmailIDs={props.flaggedEmailIDs}
          // readEmail={ReadEmail}
          // flagEmail={FlagEmail}
          // unflagEmail={unflagEmail}
          // flaggedEmailIDs={flaggedEmailIDs}
        />
      );
    });
  }

  return <section className="u-flexColumn Feed-container">{emailsList}</section>;
};

export default Feed;
