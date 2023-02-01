import React, { useState, useEffect } from "react";
import { Router, Redirect } from "@reach/router";
import jwt_decode from "jwt-decode";

import NotFound from "./pages/NotFound.js";
import Login from "./pages/Login.js";
import Main from "./pages/Main.js";
import Profile from "./pages/Profile.js";

import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";
import { navigate } from "@reach/router";

/**
 * The main component that renders our web application
 */

const App = () => {
  const [userID, setUserID] = useState(undefined);
  const [isLoaded, setLoaded] = useState(false); // controls whether we show a page
  const [emails, emailSetter] = useState([]);
  const [readEmailIDs, emailsReadSetter] = useState([]);
  const [flaggedEmailIDs, emailsFlaggedSetter] = useState([]);
  const [triggerRead, setTriggerRead] = useState(0);
  const [triggerFlagged, setTriggerFlagged] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        setUserID(user._id);
        // they are registed in the database, and currently logged in.
      }
      setLoaded(true); // now that we've made the original API request, we're good to show the page
    });
  }, []);

  // TODO: Delete this if we're not using Google Auth
  const handleLogin = (credentialResponse) => {
    const userToken = credentialResponse.credential;
    const decodedCredential = jwt_decode(userToken);
    console.log(`Logged in as ${decodedCredential.name}`);
    post("/api/login", { token: userToken }).then((user) => {
      setUserID(user._id);
    });
  };

  const handleLogout = () => {
    console.log("Logged out successfully!");
    setUserID(null);
    post("/api/logout");
  };

  useEffect(() => {
    console.log("triggering use effect");
    get("/api/read", { userID: userID }).then((readEmails) => {
      emailsReadSetter(readEmails);
    });
  }, [triggerRead]);

  useEffect(() => {
    get("/api/flag", { userID: userID }).then((flaggedEmails) => {
      // console.log(flaggedEmails);
      emailsFlaggedSetter(flaggedEmails);
    });
  }, [triggerFlagged, userID]);

  useEffect(() => {
    get("/api/emails").then((emailObjs) => {
      emailSetter(emailObjs);
      setIsLoading(false);
    });
  }, []);

  const ReadEmail = (email_ID, subject) => {
    post("/api/read", { userID: userID, emailID: email_ID, subject: subject }).then(() => {
      setTriggerRead(triggerRead + 1);
    });
  };
  const FlagEmail = (email_ID, subject) => {
    post("/api/flag", { userID: userID, emailID: email_ID, subject: subject }).then(() => {
      setTriggerFlagged(triggerFlagged + 1);
    });
  };
  const unflagEmail = (email_ID, subject) => {
    post("/api/unflag", { userID: userID, emailID: email_ID, subject: subject }).then(() => {
      setTriggerFlagged(triggerFlagged + 1);
    });
  };

  return (
    <>
      {isLoaded && (
        <Router>
          <Main
            path="/"
            userID={userID}
            handleLogin={handleLogin}
            handleLogout={handleLogout}
            emailData={emails}
            ReadEmail={ReadEmail}
            FlagEmail={FlagEmail}
            unflagEmail={unflagEmail}
            flaggedEmailIDs={flaggedEmailIDs}
            readEmailIDs={readEmailIDs}
            isLoading={isLoading}
          />
          <Profile
            path="/profile"
            userID={userID}
            handleLogin={handleLogin}
            handleLogout={handleLogout}
            emailData={emails}
            readEmail={ReadEmail}
            flagEmail={FlagEmail}
            unflagEmail={unflagEmail}
            flaggedEmailIDs={flaggedEmailIDs}
          />
          {/* {userID ? <></> : <Redirect to="/login" from="/" />} */}
          <NotFound default />
        </Router>
      )}
    </>
  );
};

export default App;
