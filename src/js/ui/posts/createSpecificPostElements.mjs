export const createSpecificPostElements = (
  profileName,
  profileImg,
  profileImgAlt,
  timeAgo,
  postImg,
  postImgAlt,
  postBodyTitle,
  postBodyText,
  buttonGroup,
  link
) => {
  const postWrapper = document.createElement("section");
  postWrapper.id = "post-wrapper";
  postWrapper.className =
    "flex flex-col mb-4 mt-4 lg:mt-12 items-center md:max-w-2xl lg:max-w-2xl xl:max-w-3xl xxl:max-w-5xl";

  const mainContainer = document.createElement("div");
  mainContainer.className = "flex flex-col gap-6 max-w-4xl";

  // Author info section
  const authorLink = document.createElement("a");
  authorLink.href = link;
  authorLink.className = "flex gap-2 items-center w-fit";

  const authorImg = document.createElement("img");
  authorImg.className = "w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover";
  authorImg.src = profileImg;
  authorImg.alt = profileImgAlt;

  const authorInfo = document.createElement("div");
  authorInfo.className = "flex flex-col";

  const authorName = document.createElement("p");
  authorName.className = "text-sm";
  authorName.textContent = profileName;

  const postTime = document.createElement("p");
  postTime.className = "text-xs font-light opacity-80";
  postTime.setAttribute("aria-label", "When content was posted");
  postTime.textContent = timeAgo;

  authorInfo.appendChild(authorName);
  authorInfo.appendChild(postTime);

  authorLink.appendChild(authorImg);
  authorLink.appendChild(authorInfo);

  // Post content section
  const postContent = document.createElement("div");
  postContent.className = "flex flex-col gap-6 items-start";

  const postImageContainer = document.createElement("div");
  postImageContainer.className = "flex justify-center max-w-screen";

  const postImage = document.createElement("img");
  postImage.className = "object-cover rounded-lg";
  postImage.src = postImg;
  postImage.alt = postImgAlt;

  postImageContainer.appendChild(postImage);

  const article = document.createElement("article");
  article.className = "flex flex-col gap-4";

  const postTitle = document.createElement("h1");
  postTitle.className = "text-xl max-w-prose";
  postTitle.textContent = postBodyTitle;

  const postBody = document.createElement("p");
  postBody.className = "text-sm lg:text-base max-w-prose";
  postBody.textContent = postBodyText;

  article.appendChild(postTitle);
  article.appendChild(postBody);

  postContent.appendChild(postImageContainer);
  postContent.appendChild(article);

  // Like, comment, edit, and delete section
  const actionContainer = document.createElement("div");
  actionContainer.className = "flex justify-between";

  const buttonGroupLeft = document.createElement("div");
  buttonGroupLeft.className = "flex gap-6";

  const likeButton = document.createElement("button");
  likeButton.type = "button";
  likeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 icon-states"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>`;

  const commentButton = document.createElement("button");
  commentButton.type = "button";
  commentButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 icon-states"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" /></svg>`;

  buttonGroupLeft.appendChild(likeButton);
  buttonGroupLeft.appendChild(commentButton);

  actionContainer.appendChild(buttonGroupLeft);
  actionContainer.appendChild(buttonGroup); // Gets added from render function

  mainContainer.appendChild(authorLink);
  mainContainer.appendChild(postContent);
  mainContainer.appendChild(actionContainer);
  postWrapper.appendChild(mainContainer);

  document.querySelector("main").appendChild(postWrapper);
};

export const addRightButtonContainer = () => {
  const buttonGroupRight = document.createElement("div");
  buttonGroupRight.className = "flex gap-6";

  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.id = "edit-button";
  editButton.innerHTML = `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 icon-states">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>`;

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.id = "delete-button";
  deleteButton.innerHTML = `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 icon-states">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>`;

  buttonGroupRight.appendChild(editButton);
  buttonGroupRight.appendChild(deleteButton);

  return buttonGroupRight;
};
