import { API_POSTS_URL, personalTag } from "../../../constants/api.mjs";
import { renderPosts } from "../../../events/posts/renderPosts.mjs";
import { displayMessage } from "../../../ui/common/displayMessage.mjs";
import { sortPostsByDate } from "../../../ui/posts/sortPostsByDate.mjs";
import { fetchAPI } from "../../utils/fetchAPI.mjs";
import { setCurrentPage } from "./getPostsHandler.mjs";

const loader = document.querySelector("#loader");
let currentPage = 1;
const limit = 10;
const sortParam = "created";
let sortOrder = "desc";
let isFiltering = false;

export const filterPostByTagHandler = async () => {
  isFiltering = true;
  const Url = `${API_POSTS_URL}?_tag=${personalTag}&_author=true&limit=${limit}&page=${currentPage}&sort=${sortParam}&sortOrder=${sortOrder}`;
  try {
    const data = await fetchAPI(Url, "GET");
    let filteredPostsByTag = data?.data || [];

    // Stops the infinite scroll observer
    if (loader) {
      loader.classList.add("hidden");
    }

    document.querySelector("#feed-posts").innerHTML = "";

    filteredPostsByTag = sortPostsByDate(filteredPostsByTag, sortOrder);

    renderPosts(filteredPostsByTag, "#feed-posts");
  } catch (err) {
    displayMessage("#info-message", "error", err.message || "Filtering by tag didn't work");
  }
};

export const initializeFilterPostsByTag = () => {
  document.addEventListener("click", (e) => {
    if (e.target.closest("#personal-tag-btn")) {
      e.preventDefault();
      document.querySelector("#feed-posts").innerHTML = "";

      if (!isFiltering) {
        document.querySelector("#personal-tag-btn").textContent = "Reload all posts";
        if (loader) {
          loader.classList.add("hidden");
        }
        filterPostByTagHandler();
      } else {
        document.querySelector("#feed-posts").innerHTML = "";
        document.querySelector("#personal-tag-btn").textContent = "Filter by my tag";
        isFiltering = false;
        setCurrentPage(1);
        // After displaying the loader the observer runs and calls the getPostsHandler function
        if (loader) {
          loader.classList.remove("hidden");
        }
      }
    }
  });
};
