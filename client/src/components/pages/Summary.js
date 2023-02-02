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

const Summary = (props) => {
  // Formats dates sent from the backend, which have two fields:
  // date (milliseconds since epoch) and displayTime
  // moved into summary so can access props
  function formatDate(date, displayLong) {
    const dateObj = new Date(date.time);
    const endDateObj = date.end != undefined ? new Date(date.end) : undefined;
    let HOUR24 = props.militarySetting;
    // Display Options for Date differently depending on if we're displaying its time
    const displayOptions = date.displayTime
      ? {
          hour: "numeric",
          minute: "numeric",
          hour12: !HOUR24,
          weekday: displayLong ? "long" : "short",
          month: displayLong ? "long" : "short",
          day: "numeric",
        }
      : {
          hour12: !HOUR24,
          weekday: displayLong ? "long" : "short",
          month: displayLong ? "long" : "short",
          day: "numeric",
        };

    // Get text representations of the start and end date (if it exists)
    const startText = dateObj.toLocaleString("en-US", displayOptions);
    const endText =
      endDateObj != undefined ? endDateObj.toLocaleString("en-US", displayOptions) : "";

    // Get rid of the extraneous parts of the end date that we don't need to display
    const delimiter = " ";
    const startTokens = startText.replaceAll(",", "").split(delimiter);
    const endTokens = endText.replaceAll(",", "").split(delimiter);
    // console.log("Start Tokens", startTokens);
    // console.log("End Tokens", endTokens);
    const filteredEnd = endTokens
      .filter((word, index) => {
        return startTokens.indexOf(word) !== index || word.includes("AM") || word.includes("PM");
      })
      .join(" ");

    return endText.length ? [startText, filteredEnd].join(" \u2013 ") : startText;
  }
  const urls = makeURLs(props.links, 3);
  const allDates = JSON.parse(props.dates);
  const venues = props.venues;
  // console.log(filterDates(allDates, 3));

  return (
    <div className="u-flexColumn Summary-container">
      <h1>{props.subject}</h1>
      {venues.length ? (
        <span>
          <strong className="Summary-strong">{venues.length === 1 ? "Venue" : "Venues"}:</strong>{" "}
          {venues.map((venue, index) => (
            <span key={index}>
              <a href={venue[1]} target="_blank" className="u-link">
                {venue[0]}
              </a>
              {index != venues.length - 1 && ", "}
            </span>
          ))}
        </span>
      ) : (
        <></>
      )}
      {allDates.length ? (
        <span>
          <strong className="Summary-strong">{allDates.length === 1 ? "Date" : "Dates"}:</strong>{" "}
          {allDates.map((date) => formatDate(date, allDates.length <= 2)).join("  |  ")}
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
              </a>
              {index != urls.length - 1 && ", "}
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
