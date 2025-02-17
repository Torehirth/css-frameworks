import { API_POSTS_URL } from "../../../constants/api.mjs";
import { displayMessage } from "../../../ui/common/displayMessage.mjs";
import { renderPosts } from "../../../ui/posts/renderPosts.mjs";
import { sortPostsByDate } from "../../../ui/posts/sortPostsByDate.mjs";
import { fetchPosts } from "../fetchPosts.mjs";

const messageContainer = document.querySelector("#feed-info-message");
const loader = document.querySelector("#loader");
let currentPage = 1;
const limit = 10;
const usersParam = "_author=true";
const sortParam = "created";
let sortOrder = "desc";

// Fetch and display posts
export const getPostsHandler = async () => {
  const URLparameters = `${usersParam}&limit=${limit}&page=${currentPage}&sort=${sortParam}&sortOrder=${sortOrder}`;
  try {
    const data = await fetchPosts(`${API_POSTS_URL}?${URLparameters}`);
    const posts = data?.data || [];
    if (posts.length === 0) {
      observer.disconnect();
      loader.style.display = "none";
      displayMessage(messageContainer, "info", "No more posts to load.");
      return;
    }
    renderPosts(posts, "#feed-posts", "../post/index.html");
    sortPostsByDate();
    currentPage++;
  } catch (err) {
    console.error(err);
    displayMessage(messageContainer, "error", "Failed to load posts. Try again later.");
    loader.style.display = "none";
  }
};

// Setter functions to export the values from the variables
export const setCurrentPage = (page) => {
  currentPage = page;
};
export const setSortOrder = (order) => {
  sortOrder = order;
};
