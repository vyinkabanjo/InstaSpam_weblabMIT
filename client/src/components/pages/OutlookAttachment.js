import React, { useEffect, useState } from "react";
import "../../utilities.css";
import "./Attachments.css";
import "./Feed.css";
import { get, post } from "../../utilities";
import StarVector from "../../public/icons/Star Vector.svg";

/**
 * Displays an image from microsoft that was gotten through a contentID
 *
 * Proptypes
 * @param {String} emailID emailID of the email to get attachment from
 * @param {String} attachmentID attachment ID of email gotten by emailID
 */

const OutlookAttachment = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgData, setImgData] = useState("");
  useEffect(() => {
    get("api/attachment", { emailID: props.emailID, attachmentID: props.attachmentID })
      .then((response) => {
        console.log(response);
        setImgData(response);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.log(error);
        setIsLoaded(true);
      });
  }, []);
  return isLoaded ? (
    <img
      src={`data:${imgData.contentType};base64,${imgData.contentBytes}`}
      className="Attachment-image"
    />
  ) : (
    <img src={StarVector} alt="Loading" className="Feed-loading" />
  );
};

export default OutlookAttachment;
