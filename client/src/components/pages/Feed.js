import React from "react";

import "../../utilities.css";
import "./Feed.css";
import Post from "./Post";

/**
 * Feed is the component containing the list of posts
 *
 * Proptypes
 * @param {string} user_id user id of the client
 */
const Feed = (props) => {
  return (
    <div>
      <Post />
    </div>
  );
};

export default Feed;
