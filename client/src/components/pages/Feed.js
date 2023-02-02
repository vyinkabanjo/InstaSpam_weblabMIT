import React, { useState, useEffect } from "react";
import "../../utilities.css";
import "./Feed.css";
import Post from "./Post";
import Divider from "./Divider";
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
      const emailDay = new Date(emailObj.timeReceived).getDate();
      const nextDate =
        id + 1 < emailsList.length ? new Date(emailsList[id + 1].timeReceived) : undefined;
      const nextDay = nextDate != undefined ? nextDate.getDate() : undefined;
      return (
        <div key={id}>
          <Post
            key={id}
            emailData={emailObj}
            ReadEmail={props.ReadEmail}
            FlagEmail={props.FlagEmail}
            unflagEmail={props.unflagEmail}
            flaggedEmailIDs={props.flaggedEmailIDs}
          />
          {emailDay !== nextDay && nextDay !== undefined ? <Divider date={nextDate} /> : <></>}
        </div>
      );
    });
  }

  return (
    <>
      <section className="u-flexColumn Feed-container">
        <Divider date={new Date()} />
        {emailsList}
        <div className="Feed-loadMore-container">
          <span onClick={props.loadMore}>
            <button className="Feed-loadMore-button">Load more</button>
          </span>
        </div>
      </section>
    </>
  );
};

export default Feed;
