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
  // const tempImage =
  // console.log(JSON.stringify(props.attachments[0]));
  // }
  return (
    <div className="u-flexColumn">
      {props.attachments.length !== 0 ? (
        <img src={`${props.attachments[0]}`} className="embeddedImage" />
      ) : (
        <></>
      )}
      <h1>{props.subject}</h1>
      {props.dates !== "null" ? (
        <span>
          <strong>Date(s):</strong> {props.dates}
        </span>
      ) : (
        <span></span>
      )}
      {props.links.length !== 0 ? (
        <span>
          {/* TODO: Add support for more than one link */}
          <strong>Relevant Links:</strong>{" "}
          <a href={props.links[0]} target="_blank" className="u-link">
            here
          </a>
        </span>
      ) : (
        <span></span>
      )}
      {/* <span>Time(s): {props.times.join(", ")}</span> */}
    </div>
  );
};

export default Summary;
