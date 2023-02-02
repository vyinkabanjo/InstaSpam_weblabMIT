import React, { useEffect, useState } from "react";
import "../../utilities.css";
import "./Actions.css";

import OutlookIcon from "../../public/icons/Outlook Icon.svg";
import PinIcon from "../../public/icons/Pin Icon.png";
import MailIcon from "../../public/icons/Mail Icon.svg";
import MailRead from "../../public/icons/Main Read Icon.svg";
import FlagIcon from "../../public/icons/Flag Icon.svg";
import RedFlagIcon from "../../public/icons/Flag Icon Filled.svg";

/**
 * Displays Action information for a specific email Post
 *
 * Proptypes
 */
const Actions = (props) => {
  const [flagged, setFlagged] = useState(false);

  function outlookOpen() {
    window.location.href = props.emailURL;
  }

  useEffect(() => {
    if (props.flaggedEmailIDs.includes(props.emailID)) {
      setFlagged(true);
    }
  }, [props.flaggedEmailIDs]);

  // const unFlagEmail

  return (
    <div className="u-flexColumn u-flex-alignCenter">
      <button
        className="Actions-button u-pointer"
        type="button"
        onClick={() => {
          if (props.isRead) {
            // for now do nothing
            alert("already read in inbox");
          } else {
            props.ReadEmail(props.emailID, props.subject);
          }
        }}
      >
        {props.isRead ? (
          <img src={MailRead} alt="MailRead Icon" className="Actions-icon" />
        ) : (
          <img src={MailIcon} alt="Mail Icon" className="Actions-icon" />
        )}
      </button>
      <button
        className="Actions-button  u-pointer"
        type="button"
        onClick={() => {
          // TODO: add code to delete the flagged status of the email from the database once it is "re-flagged"
          if (flagged) {
            props.unflagEmail(props.emailID, props.subject);
          } else {
            props.FlagEmail(props.emailID, props.subject);
          }
          setFlagged(!flagged);
        }}
      >
        {props.isFlagged === "Flagged" || flagged ? (
          <img src={RedFlagIcon} alt="Flag Icon" className="Actions-icon" />
        ) : (
          <img src={FlagIcon} alt="Flag Icon" className="Actions-icon" />
        )}
      </button>
      <a className="Actions-button" href={props.emailURL} target="_blank">
        <img src={OutlookIcon} alt="Outlook Icon" className="Actions-icon" />
      </a>
    </div>
  );
};

export default Actions;
