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
  const [buttonClick, setButton] = useState(false);
  const [flagged, setFlagged] = useState(false);

  useEffect(() => {
    setButton(!buttonClick);
  }, []);

  function outlookOpen() {
    window.location.href = props.emailURL;
  }

  return (
    <div className="u-flexColumn u-flex-alignCenter">
      <button
        className="Actions-button"
        type="button"
        onClick={() => {
          setButton;
          props.ReadEmail(props.emailID, props.subject);
        }}
      >
        <img src={MailIcon} alt="Mail Icon" className="Actions-icon" />
      </button>
      <button
        className="Actions-button"
        type="button"
        onClick={() => {
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
        <img src={OutlookIcon} alt="Outlook Icon" className="Actions-icon" onClick={outlookOpen} />
      </button>
      {/* <img src={PinIcon} alt="Pin Icon" className="Actions-icon" /> */}
    </div>
  );
};

export default Actions;
