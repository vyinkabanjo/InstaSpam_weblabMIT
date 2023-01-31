import React from "react";
import NavBar from "./NavBar";
import Feed from "./Feed";
import Login from "./Login";

import "../../utilities.css";
import "./Main.css";

/**
 * Main is the component responsible for displaying the main dashboard
 *
 * Proptypes
 * @param {string} user_id user id of the client
 */
const Main = (props) => {
  // Only render the main page if we have a userID
  return props.userID ? (
    <>
      <NavBar
        userID={props.userID}
        handleLogin={props.handleLogin}
        handleLogout={props.handleLogout}
      />
      <Feed userID={props.userID} />
      <div className="Main-RightSidebar"></div>
    </>
  ) : (
    <Login />
  );
};

export default Main;
