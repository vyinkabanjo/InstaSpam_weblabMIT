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
    <nav className="u-flexColumn NavBar-container u-flex-alignCenter">
      <h1>Outlook</h1>
      <h1>Home</h1>
      <h1>Profile</h1>
    </nav>
  );
};

export default NavBar;
