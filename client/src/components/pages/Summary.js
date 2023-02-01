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
  const urls = makeURLs(props.links, 3);
  return (
    <div className="u-flexColumn Summary-container">
      <h1>{props.subject}</h1>
      {props.dates !== "null" && (
        <span>
          <strong className="Summary-strong">Date(s):</strong> {props.dates}
        </span>
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
