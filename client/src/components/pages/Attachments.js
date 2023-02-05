import React, { useEffect, useState } from "react";
import "../../utilities.css";
import "./Attachments.css";
import LeftArrow from "../../public/icons/Left Arrow.svg";
import RightArrow from "../../public/icons/Right Arrow.svg";
import OutlookAttachment from "./OutlookAttachment";
import { get, post } from "../../utilities";

/**
 * Displays attachment content for a specific email Post
 *
 * Proptypes
 * @param {Array} media list of attachements
 * @param {string} emailID emailID (for getting outlook attachments)
 */

const Attachments = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [attachmentIDs, setAttachmentIDs] = useState([]);

  // get images we can display inline
  const useableImages = props.media.filter(
    (imglink) => !imglink.startsWith("cid") && !imglink.startsWith("https://mailfoogae.appspot.com")
  );

  useEffect(() => {
    // get images with "cid" tags that we need to do more to display
    const cidImages = props.media
      .filter((imglink) => imglink.startsWith("cid"))
      .map((imglink) => imglink.replace("cid:", ""));
    if (cidImages.length) {
      get("/api/attachmentIDs", { emailID: props.emailID, contentIDs: cidImages }).then(
        (response) => {
          setAttachmentIDs(response);
          console.log(response);
        }
      );
    }
  }, []);

  // Create an array for all images
  const allImages = [...useableImages, ...attachmentIDs];
  // Functions for moving carousel widget left or right
  const moveLeft = () => {
    if (activeIndex === 0) {
      setActiveIndex(allImages.length - 1);
    } else {
      setActiveIndex((activeIndex - 1) % allImages.length);
    }
  };
  const moveRight = () => {
    setActiveIndex((activeIndex + 1) % allImages.length);
  };
  return allImages.length ? (
    <div className="u-flex Attachment-container">
      {allImages.length > 1 && (
        <button onClick={moveLeft} className="u-pointer Attachment-button">
          <img src={LeftArrow} alt="Left Arrow" />
        </button>
      )}
      {/* Carousel Widget */}
      <div className="Attachment-carousel-container">
        {allImages.map((attachment, index) => (
          // src={"data:image/png;base64,".concat({ attachment })}
          <span
            className="Attachment-inner"
            key={index}
            style={{ transform: `translateX(${-activeIndex * 100}%)` }}
          >
            <span>
              {/* If we're out of easy to display images, start making outlook 
            attachments of the harder to display ones */}
              {index < useableImages.length ? (
                <img className="Attachment-image" src={attachment} alt="" />
              ) : (
                <OutlookAttachment emailID={props.emailID} attachmentID={attachment} />
              )}
            </span>
          </span>
        ))}
      </div>
      {allImages.length > 1 && (
        <button onClick={moveRight} className="u-pointer Attachment-button">
          <img src={RightArrow} alt="Right Arrow" />
        </button>
      )}
    </div>
  ) : (
    <></>
  );
};

export default Attachments;
