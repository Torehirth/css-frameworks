import { API_SOCIAL_URL } from "../../../constants/api.mjs";
import { getFromStorage } from "../../../events/common/utils/getFromStorage.mjs";
import { renderPosts } from "../../../events/posts/renderPosts.mjs";
import { displayMessage } from "../../../ui/common/displayMessage.mjs";
import { updateNumberOfPosts } from "../../../ui/common/handlers/updateNumberPostsProfile.mjs";
import { fetchAPI } from "../../utils/fetchAPI.mjs";

export const getUserPostsHandler = async () => {
  try {
    const { name } = getFromStorage("user");
    const URLparams = "_author=true";
    const UserPostsURL = `${API_SOCIAL_URL}/profiles/${name}/posts?${URLparams}`;
    const data = await fetchAPI(`${UserPostsURL}`, "GET");
    const userPosts = data?.data || {};

    if (!userPosts.length && data) {
      displayMessage("#info-message", "success", "No posts available");
    }
    // Disable loader when posts are loaded
    document.querySelector("#posts").innerHTML = "";
    renderPosts(userPosts, "#posts");
    updateNumberOfPosts(userPosts);
  } catch (err) {
    console.error(err);
    displayMessage("#info-message", "error", err.message || "Failed to display posts. Try again later");
    document.querySelector("#loader").classList.add("hidden");
  }
};
