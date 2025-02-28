const searchButton = document.querySelector("#aside-search-btn");
const searchInputContainer = document.querySelector("#aside-feed-search-container");
const searchInputDesktop = document.querySelector("#aside-feed-search");
const messageContainer = document.querySelector("#aside-feed-search-container #info-message");

export const toggleAsideSearchbar = () => {
  searchButton.addEventListener("click", (e) => {
    e.stopPropagation();
    searchInputContainer.classList.toggle("hidden");
    searchInputDesktop.classList.toggle("hidden");
  });
};

const closeSearchbar = () => {
  searchInputContainer.classList.add("hidden");
  searchInputDesktop.classList.add("hidden");
  searchInputDesktop.value = "";
  messageContainer.classList.add("hidden");
  messageContainer.innerHTML = "";
};

export const closeSearchBarOnKeypress = () => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeSearchbar();
    }
  });
};

export const closeSearchbarOnClick = () => {
  document.addEventListener("click", (e) => {
    e.stopPropagation();
    if (
      // If container is not hidden and click outside of search container
      !searchInputContainer.classList.contains("hidden") &&
      !e.target.closest("#aside-feed-search-container")
    ) {
      closeSearchbar();
    } else if (
      // What the f.. Not logical🤷‍♂️❓
      // If container is showing, and click anywhere outside search input, the searchbar is closing (need it for clearing the search input field when search button is clicked)
      searchInputContainer.classList.contains("hidden")
    ) {
      closeSearchbar();
    }
  });
};
