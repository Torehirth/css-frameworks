import { API_POSTS_URL } from "../../../constants/api.mjs";
import { renderPosts } from "../../../events/posts/renderPosts.mjs";
import { displayMessage } from "../../../ui/common/displayMessage.mjs";
import { fetchAPI } from "../../utils/fetchAPI.mjs";
import { getPostsHandler, setCurrentPage } from "./getPostsHandler.mjs";

const searchInputDesktop = document.querySelector("#aside-feed-search");
const searchInputMobile = document.querySelector("#feed-search");
const createPostContainer = document.querySelector("#create-post-section");
const postsContainer = document.querySelector("#feed-posts");
const loader = document.querySelector("#loader");
const messageContainer = document.querySelector("#aside-feed-search-container #info-message");
const viewMoreBtnWrapper = document.querySelector("#view-more-btn-wrapper");

let currentPage = 1;
let allPosts = [];
let searchQuery = "";

const searchPosts = async (isViewMore = false) => {
  try {
    const queryParam = `q=${searchQuery}&_author=true&limit=10&page=${currentPage}`;
    const response = await fetchAPI(`${API_POSTS_URL}/search?${queryParam}`, "GET");
    const newPosts = response?.data || [];

    if (searchQuery.length) {
      createPostContainer.classList.add("hidden");
      loader.classList.add("hidden");
    } else {
      createPostContainer.classList.remove("hidden");
    }

    if (newPosts.length > 9) {
      viewMoreBtnWrapper.classList.remove("hidden");
    } else {
      viewMoreBtnWrapper.classList.add("hidden");
    }

    // If no posts are found, show a message
    if (!newPosts.length) {
      if (isViewMore) {
        displayMessage("#info-message", "warning", "No more posts to load.");
      } else {
        postsContainer.innerHTML = "";
        displayMessage("#info-message", "warning", "No posts match your search.");
      }
      messageContainer.classList.remove("hidden");
    } else {
      // Add new posts to the existing posts
      if (isViewMore) {
        allPosts = [...allPosts, ...newPosts];
      } else {
        // Reset posts for a new search
        allPosts = newPosts;
      }
      console.log(newPosts);

      postsContainer.innerHTML = "";
      renderPosts(allPosts, "#feed-posts");
      messageContainer.classList.add("hidden");
    }
  } catch (error) {
    console.error(error);
    displayMessage("#info-message", "error", "Something went wrong while searching.");
  }
};

// Function to handle search input
const handleSearchInput = (e) => {
  const inputValue = e.target.value.toLowerCase().trim();
  if (inputValue) {
    searchQuery = inputValue;
    currentPage = 1;
    searchPosts();
  } else {
    // Reset initial posts when erasing search input
    postsContainer.innerHTML = "";
    setCurrentPage(1);
    getPostsHandler();
  }
};

// Handles "View More" button click
const handleViewMore = () => {
  currentPage++;
  searchPosts(true);
};

export const searchInputEventListeners = () => {
  searchInputDesktop.addEventListener("input", handleSearchInput);
  searchInputMobile.addEventListener("input", handleSearchInput);
  viewMoreBtnWrapper.addEventListener("click", handleViewMore);
};
