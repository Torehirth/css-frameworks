import { API_BASE_URL, API_SOCIAL_ENDPOINT, API_POSTS_ENDPOINT } from "../../constants/api.mjs";
import { displayMessage } from "../../ui/common/displayMessage.mjs";
import { isFieldsetDisabled } from "../../ui/common/utils/isFieldsetDisabled.mjs";
import { createAPIRequestHeader } from "../utils/createAPIRequestHeader.mjs";

export const createPost = async (post) => {
  const postsURL = `${API_BASE_URL}${API_SOCIAL_ENDPOINT}${API_POSTS_ENDPOINT}`;
  const form = document.querySelector("#create-post-form");
  const messageContainer = document.querySelector("#info-message");

  try {
    // Disable fieldset/form when calling the API
    isFieldsetDisabled(true, 0.7, "Publishing..");
    // Create API request header
    const options = createAPIRequestHeader("POST", post);
    const response = await fetch(postsURL, options);
    const json = await response.json();

    if (!response.ok) {
      throw new Error(json.errors?.[0]?.message || "Publishing the post failed. Please try again later..");
    }

    displayMessage("#create-post-form", "success", "Post successfully posted");
    form.reset();
    setTimeout(() => {
      location.reload();
    }, 1000);
  } catch (err) {
    console.error(err.message);
    displayMessage(messageContainer, "error", err.message);
  } finally {
    // Enable fieldset/form after calling the API
    isFieldsetDisabled(false, 1, "Publish");
  }
};
