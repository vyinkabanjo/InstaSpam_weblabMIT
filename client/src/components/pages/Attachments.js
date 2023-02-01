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
  // cid images from microsoft are not helpful rn
  const useableImages = props.media.filter((imglink) => !imglink.startsWith("cid"));

  return useableImages ? (
    <div className="u-flex u-flex-justifyCenter u-flex-alignCenter Attachment-container">
      {useableImages.map((attachment, id) => (
        <img className="Attachment-image" src={attachment} alt="Email Attachment" key={id} />
      ))}
    </div>
  ) : (
    <></>
  );
};

export default Attachments;
