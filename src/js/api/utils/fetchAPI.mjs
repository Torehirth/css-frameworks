import { displayMessage } from "../../ui/common/displayMessage.mjs";
import { createAPIRequestHeader } from "./createAPIRequestHeader.mjs";

/**
 * Fetches data from the given API URL with the specified request type.
 *
 * @param {string} URL - The URL of the API endpoint to fetch data from.
 * @param {string} requestType - The type of request to make (e.g., 'GET', 'POST').
 * @returns {Promise<Object>} - A promise that resolves to the fetched data.
 * @throws {Error} - Throws an error if the fetch operation fails.
 *
 * @example
 * const URL = 'https://api.example.com/posts';
 * const requestType = 'GET';
 * try {
 *   const data = await fetchAPI(URL, requestType);
 *   console.log(data);
 * } catch (error) {
 *   console.error('Error fetching data:', error);
 * }
 */

export const fetchAPI = async (URL, requestType) => {
  const messageContainer = document.querySelector("#info-message");
  const loader = document.querySelector("#loader");

  try {
    // Create API request header
    const options = createAPIRequestHeader(requestType);
    // Fetch API
    const response = await fetch(URL, options);
    const posts = await response.json();

    if (!response.ok) {
      throw new Error(posts.errors?.[0]?.message || "Failed to get the data. Please try again later..");
    }
    return posts;
  } catch (err) {
    console.error(err.message);
    displayMessage(messageContainer, "error", err.message);
    if (loader) {
      loader.classList.add("hidden");
    }
  }
};
