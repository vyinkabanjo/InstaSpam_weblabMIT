import React from "react";
import "../../utilities.css";
import "./SenderInfo.css";

import ProfileIcon from "../../public/icons/Profile Icon.png";
/**
 * Displays Sender Information for a specific post
 *
 * Proptypes
 * @param {string} name
 * @param {string} email
 * @param {string} time
 */

const SenderInfo = (props) => {
  return (
    <div className="u-flex u-flex-alignCenter u-flex-justifyCenter SenderInfo-div">
      {props.name} | {props.email} | {props.time}{" "}
      <div>
        <img className="SenderInfo-icon" src={ProfileIcon} />
      </div>
    </div>
  );
};

export default SenderInfo;
