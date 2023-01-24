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
 * @param {object} senderInfo object containing sender information
 */
const parseDateTime = (dateTime) => {
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
  return (
    <article className="Post-container u-flexColumn">
      <SenderInfo
        name={props.senderName}
        email={props.senderEmail}
        time={parseDateTime(props.timeReceived)}
      />
      {/* <Attachments media={props.attachments} /> */}
      <div className="u-flex u-flex-alignCenter Post-info">
        <Summary
          subject={props.header}
          dates={props.dates}
          links={props.links}
          times={props.times}
          venue={props.venue}
        />
        <Actions
          subject={props.header}
          emailID={props.emailID}
          ReadEmail={props.readEmail}
          FlagEmail={props.flagEmail}
          emailURL={String(props.emailURL)}
        />
      </div>
    </article>
  );
};

export default Post;
