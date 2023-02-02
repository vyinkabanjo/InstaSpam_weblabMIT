import * as chrono from "chrono-node";
import React, { useEffect } from "react";
import "../../utilities.css";
import "./Summary.css";
/**
 * Displays Summary information for a specific email Post
 *
 * Proptypes
 * @param {string} subject email subject
 * @param {string[]} dates email dates
 * @param {string[]} links email links
 * @param {string[]} times event times
 * @param {string[]} venues event venues
 */

function makeURLs(links, maxLen) {
  const urlObjs = links.map((link) => {
    // TODO: trying doing a fetch request on the link to find redirects
    try {
      return new URL(link, "https://example.com"); // catches some badly formed links "i.e. //google.com"
    } catch {
      return new URL("https://" + link, "https://example.com"); // try and catch the rest
    }
  });

  if (urlObjs.length > maxLen) {
    urlObjs.length = maxLen;
  }

  return urlObjs;
}

// Formats dates sent from the backend, which have two fields:
// date (milliseconds since epoch) and displayTime
function formatDate(date) {
  const dateObj = new Date(date.time);
  const endDateObj = date.end != undefined ? new Date(date.end) : undefined;
  const fullDisplayOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    weekday: "short",
    month: "short",
    day: "numeric",
  };

  const shortDisplayOptions = {
    hour12: true,
    weekday: "short",
    month: "short",
    day: "numeric",
  };

  const endDisplayOptions = {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  };

  // const endText =
  //   endDateObj != undefined ? endDateObj.toLocaleString("en-US", endDisplayOptions) : "";

  return date.displayTime
    ? dateObj.toLocaleString("en-US", fullDisplayOptions)
    : dateObj.toLocaleDateString("en-US", shortDisplayOptions);
}

const Summary = (props) => {
  const urls = makeURLs(props.links, 3);
  const allDates = JSON.parse(props.dates);
  console.log(allDates);
  // console.log(filterDates(allDates, 3));
  return (
    <div className="u-flexColumn Summary-container">
      <h1>{props.subject}</h1>
      {allDates.length ? (
        <span>
          <strong className="Summary-strong">Date(s):</strong>{" "}
          {allDates.map((date) => formatDate(date)).join("  |  ")}
        </span>
      ) : (
        <></>
      )}
      {urls.length ? (
        <span>
          <strong className="Summary-strong">Relevant Links:</strong>{" "}
          {urls.map((url, index) => (
            <span key={index + url.href}>
              <a href={url} target="_blank" className="u-link">
                {/* Display URL host name */}
                {url.hostname}
                {/* Removes last comma */}
                {index != urls.length - 1 && ","}
              </a>{" "}
            </span>
          ))}
        </span>
      ) : (
        <></>
      )}
      {/* <span>Time(s): {props.times.join(", ")}</span> */}
    </div>
  );
};

export default Summary;
