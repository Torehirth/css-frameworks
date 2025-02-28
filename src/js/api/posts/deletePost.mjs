import { API_POSTS_URL } from "../../constants/api.mjs";
import { getFromSessionStorage } from "../../events/common/utils/getFromSessionStorage.mjs";
import { getQueryParameter } from "../../events/common/utils/getQueryParameter.mjs";
import { resetURLWithoutRefresh } from "../../events/common/utils/resetURLWithoutRefresh.mjs";
import { displayMessage } from "../../ui/common/displayMessage.mjs";
import { fetchAPI } from "../utils/fetchAPI.mjs";

export const deletePostListener = () => {
  document.addEventListener("click", (e) => {
    if (e.target.closest("#delete-button")) {
      deletePost(e);
    }
  });
};

const deletePost = async (e) => {
  const id = getQueryParameter("id");
  const Url = `${API_POSTS_URL}/${id}`;

  if (!id) {
    console.error("ID not found as query parameter");
    return;
  }
  const deleteButton = e.target.closest("#delete-button");
  if (!deleteButton) return;

  try {
    await fetchAPI(Url, "DELETE");
    // Removes the post from the page
    document.querySelector("#post-wrapper").remove();
    // Resets the URL Without the ID as query parameter.
    resetURLWithoutRefresh();

    displayMessage("#info-message", "success", "Post deleted successfully!");

    setTimeout(() => {
      navigateBackOnDelete();
    }, 1500);
  } catch (err) {
    console.error(err);
    displayMessage("#info-message", "error", err.message || "Could not delete post");
  }
};

const navigateBackOnDelete = () => {
  // Navigate back to page where user came from when clicking the post
  // Previous page gets saved to session storage in router function
  const previousPage = getFromSessionStorage("previousPage");
  if (previousPage) {
    window.location.href = previousPage;
  } else {
    window.location.href = "../feed/index.html";
  }
};
