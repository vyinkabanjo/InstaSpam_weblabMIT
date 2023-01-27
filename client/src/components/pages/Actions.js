import React, { useEffect, useState } from "react";
import "../../utilities.css";
import "./Actions.css";

import OutlookIcon from "../../public/icons/Outlook_Icon.svg";
import PinIcon from "../../public/icons/Pin Icon.png";
import MailIcon from "../../public/icons/Mail Icon.png";
import FlagIcon from "../../public/icons/Flag Icon.png";
import RedFlagIcon from "../../public/icons/RedFlag Icon.png";

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

  if (props.flaggedEmailIDs.includes(props.emailID) && !flagged) {
    setFlagged(true);
  }

  // const unFlagEmail

  return (
    <div className="u-flexColumn u-flex-alignCenter">
      <button
        className="Actions-button"
        type="button"
        onClick={() => {
          props.ReadEmail(props.emailID, props.subject);
        }}
      >
        <img src={MailIcon} alt="Mail Icon" className="Actions-icon" />
      </button>
      <button
        className="Actions-button"
        type="button"
        onClick={() => {
          // TODO: add code to delete the flagged status of the email from the database once it is "re-flagged"

          setFlagged(!flagged);
          props.FlagEmail(props.emailID, props.subject);
        }}
      >
        {flagged ? (
          <img src={RedFlagIcon} alt="Flag Icon" className="Actions-icon" />
        ) : (
          <img src={FlagIcon} alt="Flag Icon" className="Actions-icon" />
        )}
      </button>
      <button className="Actions-button">
        <img src={OutlookIcon} alt="Outlook Icon" className="Actions-icon" />
      </button>
    </div>
  );
};

export default Actions;
