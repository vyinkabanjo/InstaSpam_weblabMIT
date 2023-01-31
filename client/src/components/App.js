import React, { useState, useEffect } from "react";
import { Router, Redirect } from "@reach/router";
import jwt_decode from "jwt-decode";

import NotFound from "./pages/NotFound.js";
import Login from "./pages/Login.js";
import Main from "./pages/Main.js";

import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";
import { navigate } from "@reach/router";

/**
 * The main component that renders our web application
 */

const refreshToken = async () => {
  await get("/auth/acquireToken");
};

const App = () => {
  const [userID, setUserID] = useState(undefined);
  const [isLoaded, setLoaded] = useState(false); // controls whether we show a page

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        refreshToken().then(setUserID(user._id));
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

  return (
    <>
      {isLoaded && (
        <Router>
          <Main path="/" userID={userID} handleLogin={handleLogin} handleLogout={handleLogout} />
          {/* {userID ? <></> : <Redirect to="/login" from="/" />} */}
          <NotFound default />
        </Router>
      )}
    </>
  );
};

export default App;
