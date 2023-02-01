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
    <div className="u-flex u-flex-justifyCenter">
      {useableImages.map((attachment, id) => (
        <img
          // src={"data:image/png;base64,".concat({ attachment })}
          src={attachment}
          alt="Email Attachment"
          key={id}
          className="embeddedImage"
        />
        // <img src={attachment} alt="Email Attachment" key={id} className="embeddedImage" />
      ))}
    </div>
  ) : (
    <></>
  );
};

export default Attachments;
