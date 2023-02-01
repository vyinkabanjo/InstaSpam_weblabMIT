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
  const useableImages = props.media.filter(
    (imglink) => !imglink.startsWith("cid") && !imglink.startsWith("https://mailfoogae.appspot.com")
  );
  console.log(useableImages);
  return useableImages ? (
    <div className="u-flex u-flex-justifyCenter u-flex-alignCenter Attachment-container">
      {useableImages.map((attachment, id) => (
        // src={"data:image/png;base64,".concat({ attachment })}
        <img className="Attachment-image" src={attachment} alt="" key={id} />
      ))}
    </div>
  ) : (
    <></>
  );
};

export default Attachments;
