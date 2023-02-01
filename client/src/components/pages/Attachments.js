import React, { useState } from "react";
import "../../utilities.css";
import "./Attachments.css";
import LeftArrow from "../../public/icons/Left Arrow.svg";
import RightArrow from "../../public/icons/Right Arrow.svg";

/**
 * Displays attachment content for a specific emali Post
 *
 * Proptypes
 * @param {Array} media list of attachements
 */

const Attachments = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const useableImages = props.media.filter(
    (imglink) => !imglink.startsWith("cid") && !imglink.startsWith("https://mailfoogae.appspot.com")
  );

  const moveLeft = () => {
    if (activeIndex == 0) {
      setActiveIndex(useableImages.length - 1);
    } else {
      setActiveIndex((activeIndex - 1) % useableImages.length);
    }
  };
  const moveRight = () => {
    setActiveIndex((activeIndex + 1) % useableImages.length);
  };
  return useableImages.length ? (
    <div className="u-flex Attachment-container">
      {useableImages.length > 1 && (
        <button onClick={moveLeft} className="u-pointer Attachment-button">
          <img src={LeftArrow} alt="Left Arrow" />
        </button>
      )}
      <div className="Attachment-carousel-container">
        {useableImages.map((attachment, index) => (
          // src={"data:image/png;base64,".concat({ attachment })}
          <span
            className="Attachment-inner"
            key={index}
            style={{ transform: `translateX(${-activeIndex * 100}%)` }}
          >
            <img className="Attachment-image" src={attachment} alt="" />
          </span>
        ))}
      </div>
      {useableImages.length > 1 && (
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
