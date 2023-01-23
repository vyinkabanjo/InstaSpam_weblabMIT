import React from "react";
import "../../utilities.css";
import "./Attachments.css";
/**
 * Post displays content for a specific email
 *
 * Proptypes
 * @param {Array} media list of attachements
 */
const Attachments = (props) => {
  return (
    <div className="u-flex u-flex-justifyCenter">
      {props.media.map((attachment) => (
        <img src={attachment} />
      ))}
    </div>
  );
};

export default Attachments;
