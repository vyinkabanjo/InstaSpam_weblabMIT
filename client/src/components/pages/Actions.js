import React from "react";
import "../../utilities.css";
import "./Actions.css";

import OutlookIcon from "../../public/icons/Outlook_Icon.svg";
import PinIcon from "../../public/icons/Pin Icon.png";
import MailIcon from "../../public/icons/Mail Icon.png";
import FlagIcon from "../../public/icons/Flag Icon.png";
import { get, post } from "../../utilities";

/**
 * Displays Action information for a specific email Post
 *
 * Proptypes
 */
const Actions = (props) => {
  const ReadEmail = (email_ID, subject) => {
    // post("/api/read", { userId: props.userId, emailID: email_ID });
    post("/api/read", { emailID: email_ID, subject: subject });
  };

  const FlagEmail = (email_ID, subject) => {
    post("/api/flag", { emailID: email_ID, subject: subject });
    // post("/api/flag", { userId: props.userId, emailID: email_ID });
    // TODO: add code to change the color of the flag icon to red?
  };
  return (
    <div className="u-flexColumn u-flex-alignCenter">
      <button
        className="Actions-button"
        type="button"
        onClick={ReadEmail(props.emailID, props.subject)}
      >
        <img src={MailIcon} alt="Mail Icon" className="Actions-icon" />
      </button>
      <button
        className="Actions-button"
        type="button"
        onClick={FlagEmail(props.emailID, props.subject)}
      >
        <img src={FlagIcon} alt="Flag Icon" className="Actions-icon" />
      </button>
      <button className="Actions-button">
        <img src={OutlookIcon} alt="Outlook Icon" className="Actions-icon" />
      </button>
      {/* <img src={PinIcon} alt="Pin Icon" className="Actions-icon" /> */}
    </div>
  );
};

export default Actions;
