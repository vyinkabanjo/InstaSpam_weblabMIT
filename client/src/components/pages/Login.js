import React from "react";
import NavBar from "./NavBar";
import Feed from "./Feed";

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
  console.log("Signing In");
  get("auth/signin").then((response) => {
    console.log(response);
    //TODO: Is there a better way to do this other than just going to the URL?
    window.location.href = response.authCodeUrl;
  });
};

const logout = () => {
  console.log("Logging Out");
  post("/auth/signout").then(window.location.reload());
};

/**
 * Login is the component responsible for displaying the login page for the user
 */
const Login = (props) => {
  return (
    <>
      <p>Login Page!</p>
      <button onClick={login}>MSAL Login</button>
      {/* {props.userID ? (
        <button onClick={logout}>MSAL Logout</button>
      ) : (
        <button onClick={login}>MSAL Login</button>
      )} */}
    </>
  );
};

export default Login;
