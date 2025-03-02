import { getTimeAgo } from "../../events/posts/getTimeAgo.mjs";
import { createPostElements } from "../../ui/posts/createPostElements.mjs";
import { getFromStorage } from "../common/utils/getFromStorage.mjs";

export const renderPosts = (posts, postsContainerId) => {
  posts.forEach((post) => {
    const profileImage = post?.author?.avatar?.url || "";
    const profileName = post?.author?.name || "";
    const postTitle = post?.title || "New Post";
    const postBody = post?.body || "";
    const postImage = post?.media?.url || "../../src/assets/images/profile/placeholder-no-image.webp";
    const postAltText = postImage ? post?.media?.alt || postTitle : "";
    const timeAgo = getTimeAgo(post?.created || "");
    const specificPostUrl = `/post/index.html?id=${post.id}`;

    const { name } = getFromStorage("user");
    let userLink = "";
    if (profileName !== name) {
      // If the logged in user is not the same as the clicked user profile, navigate to user profile.
      // Else navigate to post
      userLink = `/user/index.html?name=${post?.author?.name}`;
    } else {
      userLink = `/post/index.html?id=${post.id}`;
    }

    createPostElements(
      profileImage,
      profileName,
      postImage,
      postAltText,
      postTitle,
      postBody,
      timeAgo,
      postsContainerId,
      specificPostUrl,
      userLink
    );
  });
};
