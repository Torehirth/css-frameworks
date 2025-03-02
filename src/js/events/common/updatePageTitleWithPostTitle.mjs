export const updatePageTitleWithPostTitle = (post) => {
  const title = document.querySelector("title");
  const postTitle = post?.title || "Single post";
  title.textContent = `${postTitle} | Posteria`;
};
