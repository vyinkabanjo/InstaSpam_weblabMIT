import React, { useState, useEffect } from "react";
import "../../utilities.css";
import "./Feed.css";
import { get, post } from "../../utilities";

/**
 * Divider is the component dividing posts of different times
 *
 * Proptypes
 * @param {Date} date date of the divider
 */

import "./Divider.css";
import "../../utilities.css";

const Divider = (props) => {
  return (
    <div className="Divider-container u-flexColumn">
      <div className="Divider-body u-flexColumn u-flex-justifyCenter">
        {props.date.toLocaleDateString()}
      </div>
      <hr className="Divider-body-line"></hr>
    </div>
  );
};
export default Divider;
