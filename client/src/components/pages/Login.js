import React from "react";
import NavBar from "./NavBar";
import Feed from "./Feed";

import InstaspamLogo from "../../public/icons/Instaspam Logo.svg";
import MITLogo from "../../public/icons/MIT-logo-white-white-72x38.svg";
import StarVector from "../../public/icons/Star Vector.svg";

import "../../utilities.css";
import { get, post } from "../../utilities";
import "./Login.css";

/**
 * Main is the component responsible for displaying the main dashboard
 *
 * Proptypes
 * @param {string} user_id user id of the client
 */

const login = () => {
  get("auth/signin").then((response) => {
    //TODO: Is there a better way to do this other than just going to the URL?
    window.location.href = response.authCodeUrl;
  });
};
/**
 * Login is the component responsible for displaying the login page for the user
 */
const Login = (props) => {
  return (
    <>
      <div className="u-hideOverflow u-maxHeight Login-container">
        <div className="u-flexColumn Login-textContainer">
          <div className="u-flex u-flex-justifyCenter u-flex-alignCenter Login-header">
            <img src={InstaspamLogo} alt="Instaspam Logo" />
            <h1>Instaspam</h1>
          </div>
          <div className="u-flexColumn u-flex-alignCenter u-flex-justifyCenter">
            <h2 className="Login-prompt">Log In to Your Account</h2>
            <button onClick={login} className="Login-buttonPrompt u-pointer">
              {/* This extra span prevents the jittering effect that can happen on hover*/}
              <span className="u-flex u-flex-justifyCenter u-flex-alignCenter Login-buttonContent">
                <img src={MITLogo} alt="MIT Logo" />
                <p>Continue with MIT Outlook</p>
              </span>
            </button>
          </div>
        </div>
        <img src={StarVector} id="Login-star-bottomLeft"></img>
        <img src={StarVector} id="Login-star-topRight"></img>
      </div>
    </>
  );
};

export default Login;
