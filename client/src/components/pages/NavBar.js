import React from "react";

import "../../utilities.css";
import "./NavBar.css";

/**
 * NavBar is the component on the main website page responsible for navigating between pages.
 *
 * Proptypes
 * @param {string} user_id user id of the client
 */
const NavBar = (props) => {
  return (
    <nav className="NavBar-container">
      <div className="u-flexColumn NavBar-headers">
        <div className="NavBar-headerItem u-flex-alignCenter">
          <div id="outlook-logo" />
          <h1>Outlook</h1>
        </div>
        <h1>Home</h1>
        <h1>Profile</h1>
      </div>
    </nav>
  );
};

export default NavBar;
