import { resetURLWithoutRefresh } from "../../../events/common/utils/resetURLWithoutRefresh.mjs";

const newPostIcon = document.querySelector(".new-post-btn svg");
const titleInput = document.querySelector("#post-title");
const newPostBtn = document.querySelector(".new-post-btn");
const activeRoundDot = document.querySelector("#active-round-dot");

export const newPostStateAdd = (element) => {
  element.classList.add("dark:xl:bg-darkGray", "xl:bg-gray-300");
  newPostIcon.classList.add("text-eden-400");
  titleInput.focus();
  resetURLWithoutRefresh();
};

const newPostStateReset = () => {
  newPostBtn.classList.remove("dark:xl:bg-darkGray", "xl:bg-gray-300");
  activeRoundDot.classList.add("hidden");
  newPostIcon.classList.remove("text-eden-400");
};

export const setupClickOutsideNewPostHandler = () => {
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".new-post-btn")) {
      newPostStateReset();
    }
  });
};


