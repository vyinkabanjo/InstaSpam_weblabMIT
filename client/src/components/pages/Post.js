import React from "react";
import SenderInfo from "./SenderInfo.js";
import Attachments from "./Attachments.js";
import Summary from "./Summary.js";

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
      {/* dates: ["Monday, 16 January"],
      links: ["https://mit.zoom.us/j/99427694577#success"],
      times: ["2pm EST"],
      venues: ["5-134"], */}
      <Summary
        subject={props.content.subject}
        dates={props.content.dates}
        links={props.content.links}
        times={props.content.times}
        venues={props.content.venues}
      />
    </article>
  );
};

export default Post;
