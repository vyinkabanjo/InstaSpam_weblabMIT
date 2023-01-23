import React from "react";
import OutlookIcon from "../../public/icons/Outlook_Icon.svg";
import HomeIcon from "../../public/icons/Home Icon.png";
import ProfileIcon from "../../public/icons/Profile Icon.png";

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
        <span className="NavBar-headerItem u-flex-alignCenter">
          <img src={OutlookIcon} alt="Outlook Icon" className="NavBar-icon" />
          <p>Outlook</p>
        </span>

        <span className="NavBar-headerItem u-flex-alignCenter">
          <img src={HomeIcon} alt="Home Icon" className="NavBar-icon" />
          <p>Home</p>
        </span>

        <span className="NavBar-headerItem u-flex-alignCenter">
          <img src={ProfileIcon} alt="Profile Icon" className="NavBar-icon" />
          <p>Profile</p>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
