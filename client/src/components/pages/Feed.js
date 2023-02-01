import React, { useState, useEffect } from "react";
import "../../utilities.css";
import "./Feed.css";
import Post from "./Post";
import { get, post } from "../../utilities";
import StarVector from "../../public/icons/Star Vector.svg";
import LoadingIcon from "../../public/icons/LoadingIcon.png";

/**
 * Feed is the component containing the list of posts
 *
 * Proptypes
 * @param {string} user_id user id of the client
 */

// TODO: Add date indicators between posts
const Feed = (props) => {
  let emailsList = null;
  const hasEmails = props.emailData.length !== 0;

  if (props.isLoading) {
    return (
      <div className="Feed-loadingContainer u-flexColumn u-flex-justifyCenter">
        <img src={StarVector} alt="Loading" className="Feed-loading" />
      </div>
    );
  }

  if (hasEmails) {
    emailsList = props.emailData.filter((email) => !props.readEmailIDs.includes(email.emailID));
    emailsList = emailsList.map((emailObj, id) => {
      return (
        <Post
          key={id}
          emailData={emailObj}
          ReadEmail={props.ReadEmail}
          FlagEmail={props.FlagEmail}
          unflagEmail={props.unflagEmail}
          flaggedEmailIDs={props.flaggedEmailIDs}
        />
      );
    });
  }

  return (
    <>
      <section className="u-flexColumn Feed-container">
        {emailsList}
        <div className="Feed-loadMore-container">
          <img src={LoadingIcon} alt="Profile Icon" className="LoadMore-icon" />
          <button onClick={props.loadMore} className="Feed-loadMore-button u-pointer">
            Load more
          </button>
        </div>
      </section>
    </>
  );
};

export default Feed;
