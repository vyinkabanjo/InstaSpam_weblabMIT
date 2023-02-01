import React from "react";
import "../../utilities.css";
import "./Attachments.css";
/**
 * Displays attachment content for a specific emali Post
 *
 * Proptypes
 * @param {Array} media list of attachements
 */
const Attachments = (props) => {
  return props.media ? (
    <div className="u-flex u-flex-justifyCenter">
      {props.media.map((attachment, id) => (
        <img src={attachment} alt="Email Attachment" key={id} />
      ))}
    </div>
  ) : (
    <></>
  );
};

export default Attachments;
