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
  return (
    <div className="u-flexColumn u-flex-alignCenter">
      <h1>{props.subject}</h1>
      <p>Date(s): {props.dates}</p>
      <p>
        Relevant Links: <a href={props.links}>here</a>
      </p>
      <p>Time(s): {props.times}</p>
    </div>
  );
};

export default Summary;
