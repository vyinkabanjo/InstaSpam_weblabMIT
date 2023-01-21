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
    <div>
      <h1>Outlook</h1>
      <h1>Home</h1>
      <h1>Profile</h1>
    </div>
  );
};

export default NavBar;
