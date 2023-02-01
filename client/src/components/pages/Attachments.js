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
  const useableImages = props.media.filter((imglink) => !imglink.startsWith("cid"));
  return useableImages ? (
    <div className="u-flex u-flex-justifyCenter">
      {useableImages.map((attachment, id) => (
        <img src={attachment} alt="Email Attachment" key={id} />
      ))}
    </div>
  ) : (
    <></>
  );
};

export default Attachments;
