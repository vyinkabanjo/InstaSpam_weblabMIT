import React from "react";
import SenderInfo from "./SenderInfo.js";
import Attachments from "./Attachments.js";
import Summary from "./Summary.js";
import Actions from "./Actions.js";
import * as chrono from "chrono-node";

import "../../utilities.css";
import "./Post.css";

/**
 * Post displays content for a specific email
 *
 * Proptypes
 * @param {object} content content of email, including subject, date, relevant links, etc.
 * @param {string[]} attachments array containing attachment links
 * @param {object} emailData object containing email data
 */
const parseDateTime = (dateTime) => {
  // TODO: make the format more readable
  const chronoVal = chrono.parse(dateTime)[0].start;
  const result =
    String(chronoVal.get("month")) +
    "/" +
    String(chronoVal.get("day")) +
    "/" +
    String(chronoVal.get("year")) +
    "," +
    " " +
    String(chronoVal.get("hour")) +
    ":" +
    String(chronoVal.get("minute")) +
    ":" +
    String(chronoVal.get("second"));
  return result;
};
const Post = (props) => {
  const {
    senderName,
    senderEmail,
    timeReceived,
    header,
    attachments,
    relevantDates,
    links,
    times,
    venues,
    emailID,
    emailURL,
    isFlagged,
    isRead,
  } = props.emailData;

  return (
    <article className="Post-container u-flexColumn">
      <SenderInfo name={senderName} email={senderEmail} time={timeReceived} />
      <Attachments media={attachments} />
      <div className="u-flex u-flex-alignCenter Post-info">
        <Summary
          subject={header}
          dates={relevantDates}
          links={links}
          times={times}
          venues={venues}
          attachments={attachments}
        />
        <Actions
          subject={header}
          emailID={emailID}
          ReadEmail={props.ReadEmail}
          FlagEmail={props.FlagEmail}
          unflagEmail={props.unflagEmail}
          emailURL={String(emailURL)}
          flaggedEmailIDs={props.flaggedEmailIDs}
          isRead={isRead}
          isFlagged={isFlagged}
        />
      </div>
    </article>
  );
};

export default Post;
