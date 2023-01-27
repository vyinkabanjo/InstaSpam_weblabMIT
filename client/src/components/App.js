import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import jwt_decode from "jwt-decode";

import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import Main from "./pages/Main.js";

import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

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
      }
    });
  }, []);

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
        <NotFound default />
      </Router>
    </>
  );
};

export default App;
