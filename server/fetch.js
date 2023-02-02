/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

var axios = require("axios");
// const { Client } = require("@microsoft/microsoft-graph-client");

/**
 * Attaches a given access token to a MS Graph API call
 * @param endpoint: REST API endpoint to call
 * @param accessToken: raw access token string
 */
async function fetch(endpoint, accessToken) {
  const options = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  try {
    const response = await axios.get(endpoint, options);
    return await response.data;
  } catch (error) {
    throw new Error(error);
  }
}

// async function updateRead(endpoint, crsfToken, id) {
const updateRead = (endpoint, csrfToken, accessToken, id) => {
  // const updateRead = (endpoint, accessToken, id) => {
  // const client = Client.init(options);
  const message = {
    isRead: true,
  };
  axios
    .patch(endpoint + String(id), message, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
        // "X-CSRF-TOKEN": csrfToken,
      },
    })
    .then((response) => {})
    .catch((error) => {
      {
        success: false;
      }
    });
};

const updateFlagged = (endpoint, csrfToken, accessToken, message, id) => {
  // const client = Client.init(options);
  axios
    .patch(endpoint + String(id), message, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
        "X-CSRF-TOKEN": csrfToken,
      },
    })
    .then((response) => {})
    .catch((error) => {
      {
        success: false;
      }
    });
};

module.exports = { fetch, updateRead, updateFlagged };
