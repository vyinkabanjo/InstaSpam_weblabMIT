import React from "react";
import OutlookIcon from "../../public/icons/Outlook Icon.svg";
import HomeIcon from "../../public/icons/House Icon.svg";
import ProfileIcon from "../../public/icons/Profile Icon Big.svg";
import LogoutIcon from "../../public/icons/Logout Icon.svg";
import { get, post } from "../../utilities";
import { navigate } from "@reach/router";
import * as chrono from "chrono-node";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";

const GOOGLE_CLIENT_ID = "711219562850-kft2385qcmndjq2p9dviq87fv5dao8er.apps.googleusercontent.com";

import "../../utilities.css";
import "./NavBar.css";
/**
 * NavBar is the component on the main website page responsible for navigating between pages.
 *
 * Proptypes
 * @param {string} user_id user id of the client
 */

function outlookOpen() {
  window.open("https://outlook.office.com/mail/");
}

const logout = () => {
  post("/auth/signout").then((window.location.href = "/"));
};

const gotoProfile = () => {
  navigate("/profile");
};

const goHome = () => {
  navigate("/");
  // window.location.reload();
};

const NavBar = (props) => {
  const pathname = window.location.pathname; //relative location of where we are on the website
  const onHome = pathname === "/";
  return (
    <nav className="NavBar-container">
      <div className="NavBar-headers">
        <div className=" NavBar-headerGroup">
          <button onClick={outlookOpen} className="NavBar-headerItem">
            <img src={OutlookIcon} alt="Outlook Icon" className="NavBar-icon" />
            <p>Outlook</p>
          </button>

          <button onClick={goHome} className="NavBar-headerItem">
            <img src={HomeIcon} alt="Home Icon" className="NavBar-icon" />
            {onHome ? <strong className="NavBar-strong">Home</strong> : <p>Home</p>}
          </button>

          <button onClick={gotoProfile} className="NavBar-headerItem">
            <img src={ProfileIcon} alt="Profile Icon" className="NavBar-icon" />
            {onHome ? <p>Profile</p> : <strong className="NavBar-strong">Profile</strong>}
          </button>
        </div>

        <button
          onClick={logout}
          className="NavBar-headerItem u-flex-alignCenter NavBar-headerGroup"
        >
          <img src={LogoutIcon} alt="Logout Icon" className="NavBar-icon" />
          <p>Logout</p>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
