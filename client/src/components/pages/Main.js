import React from "react";
import NavBar from "./NavBar";
import Feed from "./Feed";

import "../../utilities.css";
import "./Main.css";

/**
 * Main is the component responsible for displaying the main dashboard
 *
 * Proptypes
 * @param {string} user_id user id of the client
 */
const Main = (props) => {
  return (
    <>
      <NavBar
        userId={props.userId}
        handleLogin={props.handleLogin}
        handleLogout={props.handleLogout}
      />
      {/* implement so that feed only shows up when logged in */}
      {props.userId ? <Feed userId={props.userId} /> : <></>}
      <div className="Main-RightSidebar"></div>
    </>
  );
};

export default Main;
