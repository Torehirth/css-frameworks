import { newPostStateAdd } from "./newPostStateHandlers.mjs";

const newPostBtnAll = document.querySelectorAll(".new-post-btn");
const newPostBtn = document.querySelector(".new-post-btn");
const activeRoundDot = document.querySelector("#active-round-dot");

export const setupNewPostButtonListeners = () => {
  newPostBtnAll.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      if (window.location.pathname === "/feed/index.html") {
        newPostStateAdd(newPostBtn);
        if (activeRoundDot) {
          activeRoundDot.classList.remove("hidden");
        }
      } else {
        // Navigate to feed page and add newpost as a query parameter
        window.location.href = "/feed/index.html?newpost";
      }
    });
  });
};

// Adds functionality to set input in focus and button styling after navigating between pages
export const applyNewPostStateFromURL = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const URLParams = new URLSearchParams(window.location.search);
    // Check if the URL has a parameter of newPost after the page is switched and loaded.
    if (URLParams.has("newpost")) {
      newPostStateAdd(newPostBtn);
      if (activeRoundDot) {
        activeRoundDot.classList.remove("hidden");
      }
    }
  });
};
