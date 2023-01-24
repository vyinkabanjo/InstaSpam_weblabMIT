import React from "react";
import "../../utilities.css";
import "./Attachments.css";
/**
 * Displays Summary information for a specific email Post
 *
 * Proptypes
 * @param {string} subject email subject
 * @param {string[]} dates email dates
 * @param {string[]} links email links
 * @param {string[]} times event times
 * @param {string[]} venues event venues
 */
const Summary = (props) => {
  if (props.links.length !== 0) {
    return (
      <div className="u-flexColumn">
        <h1>{props.subject}</h1>
        <span>Date(s): {props.dates}</span>
        <span>
          Relevant Links: <a href={props.links.join(", ")}>here</a>
        </span>
        {/* <span>Time(s): {props.times.join(", ")}</span> */}
      </div>
    );
  } else {
    return (
      <div className="u-flexColumn">
        <h1>{props.subject}</h1>
        <span>Date(s): {props.dates}</span>
        {/* <span>Time(s): {props.times.join(", ")}</span> */}
      </div>
    );
  }
};

export default Summary;
