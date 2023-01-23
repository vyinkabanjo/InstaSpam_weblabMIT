import React from "react";
import SenderInfo from "./SenderInfo.js";
import Attachments from "./Attachments.js";
import Summary from "./Summary.js";
import Actions from "./Actions.js";

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
const Post = (props) => {
  return (
    <article className="Post-container u-flexColumn">
      <SenderInfo
        name={props.senderInfo.sender}
        email={props.senderInfo.senderEmail}
        time={props.senderInfo.time}
      />
      <Attachments media={props.attachments} />
      <div className="u-flex u-flex-alignCenter Post-info">
        <Summary
          subject={props.content.subject}
          dates={props.content.dates}
          links={props.content.links}
          times={props.content.times}
          venues={props.content.venues}
        />
        <Actions />
      </div>
    </article>
  );
};

export default Post;
