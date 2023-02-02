import React, { useState, useEffect, useTransition } from "react";
import NavBar from "./NavBar";
import "../../utilities.css";
import Post from "./Post";
import { get, post } from "../../utilities";
import "./Main.css";
import "./Feed.css";
import "./Profile.css";
import StarVector from "../../public/icons/Star Vector.svg";

const Profile = (props) => {
  const [user, setUser] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [readChecked, setReadChecked] = useState(true);
  const [militaryClock, setMilitaryClock] = useState(true);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    document.title = "Profile Page";
    // wait for app to get userID back first
    if (props.userID) {
      get(`/api/user`, { userID: props.userID }).then((userObj) => {
        setUser(userObj);
        setIsLoaded(true);
        get(`/api/militarySetting`, { userID: props.userID }).then((settingObj) => {
          setMilitaryClock(settingObj);
          setIsLoaded(true);
          console.log("military setting", settingObj);
        });
        get(`/api/readEmailSetting`, { userID: props.userID }).then((settingObj) => {
          setReadChecked(settingObj);
          setIsLoaded(true);
          console.log("read Emails setting", settingObj);
        });
      });
    } else {
      window.location.href = "/";
    }
  }, []);

  useEffect(() => {
    setShowSettings(true);
  }, [readChecked, militaryClock]);

  const handleReadCheck = (event) => {
    const value = event.target.checked;
    setReadChecked(value);
    post("/api/readEmailSetting", { userID: props.userID, status: value }).then(() => {});
  };

  const handleMilitaryClock = (event) => {
    const value = event.target.checked;
    setMilitaryClock(value);
    post("/api/militarySetting", { userID: props.userID, status: value }).then(() => {});
  };

  // TODO:
  // - make API get request to retrieve current user's email address from Outlook if
  // MS API starts working

  let flaggedEmails = null;

  flaggedEmails = props.emailData.filter((email) => props.flaggedEmailIDs.includes(email.emailID));
  flaggedEmails = flaggedEmails.map((emailObj, id) => {
    return (
      <Post
        key={id}
        emailData={emailObj}
        readEmail={props.ReadEmail}
        flagEmail={props.FlagEmail}
        flaggedEmailIDs={props.flaggedEmailIDs}
        unflagEmail={props.unflagEmail}
      />
    );
  });

  if (!isLoaded) {
    return (
      <div className="Feed-loadingContainer u-flexColumn u-flex-justifyCenter">
        <img src={StarVector} alt="Loading" className="Feed-loading" />
      </div>
    );
  }
  return (
    <>
      <NavBar
        userID={props.userID}
        handleLogin={props.handleLogin}
        handleLogout={props.handleLogout}
      />
      <div className="ProfileInfo-container">
        <div className="Profile-text">
          <div className="u-flexColumn">
            <h1 className="ProfileInfo-name">{user.name}</h1>
            <p className="ProfileInfo-email">
              {user.email ? user.email.toLowerCase() : "placheolder@mit.edu"}
            </p>
          </div>
        </div>
        <img src={StarVector} id="Profile-star-topRight" />
      </div>

      {showSettings ? (
        <section className="u-flexColumn Settings-container">
          <h2 className="Profile-headers">Settings</h2>
          <hr className="horizontal-line" />
          <div className="Setting-options">
            <span className="Settings-leftColumn">
              <p className="u-inlineBlock">Show unread emails ONLY </p>
              <input
                type="checkbox"
                checked={readChecked}
                onChange={handleReadCheck}
                className="toggle-switch u-inlineBlock"
              />
            </span>
            <hr className="vertical-line" />
            <span className="Settings-rightColumn">
              <p className="u-inlineBlock">24-hr time format </p>
              <input
                type="checkbox"
                checked={militaryClock}
                onChange={handleMilitaryClock}
                className="toggle-switch u-inlineBlock"
              />
            </span>
          </div>
        </section>
      ) : (
        <></>
      )}

      <section className="u-flexColumn Feed-container">
        <h2 className="Profile-headers">Flagged</h2>
        <hr className="horizontal-line" />
        {flaggedEmails}
      </section>
      <div className="Main-RightSidebar"></div>
    </>
  );
};
// TODO: fix toggle switch so that the options actually cause an action to occur
// profile page not working if try to display on Main

export default Profile;
