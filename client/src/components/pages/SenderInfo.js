import React from "react";
import "../../utilities.css";
import "./SenderInfo.css";

import ProfileIcon from "../../public/icons/Profile Icon.png";
/**
 * Post displays content for a specific email
 *
 * Proptypes
 * @param {string} name
 * @param {string} email
 * @param {string} time
 */
const SenderInfo = (props) => {
  return (
    <div className="u-flex">
      {props.name} | {props.email} {props.time}{" "}
      <img className="SenderInfo-icon" src={ProfileIcon} />
    </div>
  );
};

export default SenderInfo;
