import React from "react";
import SenderInfo from "./SenderInfo";

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
      Post with content: {JSON.stringify(props)}
    </article>
  );
};

export default Post;
