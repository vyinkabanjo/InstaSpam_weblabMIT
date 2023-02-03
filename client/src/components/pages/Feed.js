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
  let startDate = null;
  const hasEmails = props.emailData.length !== 0;
  let hasFilteredEmails;

  const [militarySetting, setMilitarySetting] = useState();

  // const getSettings = (userID) => {
  useEffect(() => {
    get(`/api/militarySetting`, { userID: props.userID }).then((settingObj) => {
      setMilitarySetting(settingObj);
    });
  }, []);

  if (props.isLoading) {
    return (
      <div className="Feed-loadingContainer u-flexColumn u-flex-justifyCenter">
        <img src={StarVector} alt="Loading" className="Feed-loading" />
      </div>
    );
  }

  // TODO: delete read emails from DB after clearing them from feed

  if (hasEmails) {
    emailsList = props.emailData;
    // emailsList = props.emailData.filter((email) => !props.readEmailIDs.includes(email.emailID));
    hasFilteredEmails = emailsList.length;
  } else {
    hasFilteredEmails = false;
  }

  if (!hasFilteredEmails) {
    return (
      <section className="u-flexColumn Feed-container u-flex-justifyCenter u-flex-alignCenter Feed-container-empty">
        <div className="u-flexColumn u-flex-justifyCenter u-flex-alignCenter">
          <h1>No Unread Emails!</h1>
          <p>Wait for a while or add some yourself from Outlook!</p>
        </div>
        <p className="Feed-warningInfo">
          (Note: Instaspam requires dormspam to be sent directly to your email inbox to work.)
        </p>
      </section>
    );
  }

  startDate = new Date(emailsList[0].timeReceived);
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
          userID={props.userID}
          militarySetting={militarySetting}
        />
        {/* If two emails ever have differing dates, put a divider between them */}
        {emailDay !== nextDay && nextDay !== undefined ? <Divider date={nextDate} /> : <></>}
      </div>
    );
  });
  return (
    <>
      <section className="u-flexColumn Feed-container">
        <Divider date={startDate} />
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
