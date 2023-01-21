import React from "react";

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
  return <div>Post with content: {JSON.stringify(props)}</div>;
};

export default Post;
