import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import "../../utilities.css";
import Post from "./Post";
import { get, post } from "../../utilities";
import "./Feed.css";
import "./Profile.css";

const Profile = (props) => {
  const [user, setUser] = useState();
  // const [triggerFlagged, setTriggerFlagged] = useState(0);

  useEffect(() => {
    document.title = "Profile Page";
    // wait for app to get userID back first
    if (props.userID) {
      get(`/api/user`, { userID: props.userID }).then((userObj) => {
        setUser(userObj);
      });
    }
  }, [props.userID]);

  // TODO:
  // - make API get request to retrieve current user's email address from Outlook if
  // MS API starts working

  let flaggedEmails = null;
  const hasFlagged = props.flaggedEmailIDs.length !== 0;

  if (hasFlagged) {
    flaggedEmails = props.emailData.filter((email) =>
      props.flaggedEmailIDs.includes(email.emailID)
    );
    flaggedEmails = flaggedEmails.map((emailObj, id) => {
      return (
        <Post
          key={id}
          emailData={emailObj}
          readEmail={props.ReadEmail}
          flagEmail={props.FlagEmail}
          flaggedEmailIDs={props.flaggedEmailIDs}
        />
      );
    });
  }
  if (!user) {
    return <div className="u-textCenter"> Loading! </div>;
  }
  console.log(flaggedEmails);
  return (
    <>
      <NavBar
        userID={props.userID}
        handleLogin={props.handleLogin}
        handleLogout={props.handleLogout}
      />
      <div className="ProfileInfo-container">
        {/* <div className="Profile-avatarContainer u-flex-justifyCenter">
          <img src={ProfilePageIcon} />
        </div> */}
        <div className="Profile-text">
          <div className="Profile-name u-textCenter">
            <h3 className="ProfileInfo-header">Name</h3>
            <p>{user.name}</p>
          </div>
          <div className=" u-textCenter">
            <h3 className="ProfileInfo-header">Email</h3>
            {/* QUICK FIX FOR EMAIL FOR NOW SINCE PREVIOUSLY SIGNED IN USERS DON'T HAVE
            THEIR EMAILS PASSED IN WITH USER OBJ */}
            <p>{user.email ? user.email : "placheolder@mit.edu"}</p>
          </div>
        </div>
      </div>

      <section className="u-flexColumn Settings-container">
        <h2 className="Profile-headers">Settings</h2>
        <hr className="horizontal-line" />
        <div className="Setting-options">
          <span className="Settings-leftColumn">
            <p className="u-inlineBlock">Show unread emails </p>
            <input type="checkbox" className="toggle-switch u-inlineBlock" />
          </span>
          <hr className="vertical-line" />
          <span className="Settings-rightColumn">
            <p className="u-inlineBlock">24-hr time format </p>
            <input type="checkbox" className="toggle-switch u-inlineBlock" />
          </span>
        </div>
      </section>
      <section className="u-flexColumn Feed-container">
        <h2 className="Profile-headers">Flagged</h2>
        {flaggedEmails}
      </section>
    </>
  );
};
// TODO: fix toggle switch so that the options actually cause an action to occur
// profile page not working if try to display on Main

export default Profile;
