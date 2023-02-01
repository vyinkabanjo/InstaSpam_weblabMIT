import React from "react";
import "../../utilities.css";
import "./SenderInfo.css";

import ProfileIcon from "../../public/icons/Profile Icon.svg";
/**
 * Displays Sender Information for a specific post
 *
 * Proptypes
 * @param {string} name
 * @param {string} email
 * @param {string} time
 */

const SenderInfo = (props) => {
  const time = new Date(props.time);
  return (
    <div className="u-flex u-flex-alignCenter SenderInfo-div">
      <p>
        <strong className="SenderInfo-name">{props.name}</strong> | {props.email}
      </p>
      <p>{time.toLocaleDateString() + " | " + time.toLocaleTimeString()}</p>
      {/* <img src={ProfileIcon} className="SenderInfo-icon"></img> */}
    </div>
  );
};

export default SenderInfo;
