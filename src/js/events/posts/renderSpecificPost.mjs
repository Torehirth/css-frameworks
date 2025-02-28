import { getFromStorage } from "../../events/common/utils/getFromStorage.mjs";
import { getTimeAgo } from "../../events/posts/getTimeAgo.mjs";
import {
  addRightButtonContainer,
  createSpecificPostElements,
} from "../../ui/posts/createSpecificPostElements.mjs";

const postContainer = document.querySelector("#post-container");

export const renderSpecificPost = async (post) => {
  postContainer.innerHTML = "";

  const profileName = post?.author?.name || "User profile";
  const profileImg = post?.author?.avatar?.url || "../../src/assets/images/profile/default-avatar.webp";
  const profileImgAlt = post?.author?.avatar?.alt || "Profile image";
  const timeAgo = getTimeAgo(post?.created || "");
  const postImg = post?.media?.url || "../../src/assets/images/profile/placeholder-no-image.webp";
  const postBodyTitle = post?.title || "Missing title";
  const postBodyText = post?.body || "Missing text";
  const postImgAlt = postImg ? post?.media?.alt || postBodyTitle : "";

  // To add the edit and delete buttons on only the logged in users posts, it compares the email of the saved email to the email in the API response.
  const { email } = getFromStorage("user");
  let buttonGroup = document.createElement("div"); // Always creates an valid div(empty)
  if (email === post?.author?.email) {
    buttonGroup = addRightButtonContainer(); //
  }

  // If the logged in user is not the same as the clicked user profile, navigate to user profile, else navigate to profile page
  const { name } = getFromStorage("user");
  let userLink = "";
  if (profileName !== name) {
    userLink = `/user/index.html?name=${post?.author?.name}`;
  } else {
    userLink = `/profile/index.html`;
  }

  createSpecificPostElements(
    profileName,
    profileImg,
    profileImgAlt,
    timeAgo,
    postImg,
    postImgAlt,
    postBodyTitle,
    postBodyText,
    buttonGroup,
    userLink
  );
};
