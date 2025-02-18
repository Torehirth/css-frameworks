import { API_POSTS_URL } from "../../../constants/api.mjs";
import { updatePageTitleWithPostTitle } from "../../../events/common/updatePageTitleWithPostTitle.mjs";
import { getQueryParameter } from "../../../events/common/utils/getQueryParameter.mjs";
import { displayMessage } from "../../../ui/common/displayMessage.mjs";
import { renderSpecificPost } from "../../../ui/posts/renderSpecificPost.mjs";
import { fetchPost } from "../fetchPost.mjs";
import { deletePostListener } from "../deletePost.mjs";

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
    const data = await fetchPost(Url, "GET");
    const post = data?.data || [];

    if (!post) {
      window.location.href = "../feed/index.html";
    }
    updatePageTitleWithPostTitle(post);
    renderSpecificPost(post);
    deletePostListener();
  } catch (err) {
    console.error(err);
    displayMessage(messageContainer, "error", "Failed to load posts. Try again later.");
    loader.style.display = "none";
  }
};
