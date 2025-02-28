import { API_POSTS_URL } from "../../../constants/api.mjs";
import { updatePageTitleWithPostTitle } from "../../../events/common/updatePageTitleWithPostTitle.mjs";
import { getQueryParameter } from "../../../events/common/utils/getQueryParameter.mjs";
import { displayMessage } from "../../../ui/common/displayMessage.mjs";
import { deletePostListener } from "../deletePost.mjs";
import { initUpdatePost } from "./initUpdatePost.mjs";
import { renderSpecificPost } from "../../../events/posts/renderSpecificPost.mjs";
import { fetchAPI } from "../../utils/fetchAPI.mjs";

export const specificPostHandler = async () => {
  const messageContainer = document.querySelector("#info-message");
  const id = getQueryParameter("id");
  const Url = `${API_POSTS_URL}/${id}?_author=true`;

  if (!id) {
    // Redirect to feed if id not found, also redirects on refresh after post is deleted.
    window.location.href = "../feed/index.html";
    console.error("Could not find the ID of the post");
  }
  try {
    const data = await fetchAPI(Url, "GET");
    const post = data?.data || {};

    if (!post) {
      window.location.href = "../feed/index.html";
    }
    updatePageTitleWithPostTitle(post);
    renderSpecificPost(post);
    deletePostListener();
    initUpdatePost();
  } catch (err) {
    console.error(err);
    displayMessage(messageContainer, "error", "Failed to load posts. Try again later.");
    loader.style.display = "none";
  }
};
