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
const App = () => {
  const [userID, setUserID] = useState(undefined);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        setUserID(user._id);
      } else {
        navigate("/login");
      }
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
      <Router>
        <Main path="/" userID={userID} handleLogin={handleLogin} handleLogout={handleLogout} />
        <Login path="/login" />
        {/* {userID ? <></> : <Redirect to="/login" from="/" />} */}
        <NotFound default />
      </Router>
    </>
  );
};

export default App;
