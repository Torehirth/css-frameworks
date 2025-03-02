import {
  toggleAsideSearchbar,
  closeSearchBarOnKeypress,
  closeSearchbarOnClick,
} from "./ui/common/handlers/searchbarHandlers.mjs";
import {
  closeSortDropDownByClickOutside,
  closeSortDropdownByEscKey,
  toggleSortDropdownMenu,
} from "./ui/common/handlers/sortDropdownMenuHandlers.mjs";
import { registerFormHandler } from "./events/auth/registerFormHandler.mjs";
import { applySystemTheme, toggleColourTheme } from "./ui/common/handlers/themeHandlers.mjs";
import { loginFormHandler } from "./events/auth/loginFormHandler.mjs";
import { createPostHandler } from "./api/posts/handlers/createPostHandler.mjs";
import { logOut } from "./ui/common/handlers/logoutHandler.mjs";
import { searchInputEventListeners } from "./api/posts/handlers/searchPostsHandler.mjs";
import {
  setupNewPostButtonListeners,
  applyNewPostStateFromURL,
} from "./ui/common/handlers/newPostButtonHandlers.mjs";
import { setupClickOutsideNewPostHandler } from "./ui/common/handlers/newPostStateHandlers.mjs";
import { setupInfiniteScroll } from "./ui/common/handlers/setUpInfiniteScroll.mjs";
import { getUserPostsHandler } from "./api/posts/handlers/getUserPostsHandler.mjs";
import { specificPostHandler } from "./api/posts/handlers/specificPostHandler.mjs";
import { saveToSessionStorage } from "./events/common/utils/saveToSessionStorage.mjs";
import { displayUpdateModalListener } from "./ui/common/handlers/displayUpdateModalListener.mjs";
import { initializeFilterPostsByTag } from "./api/posts/handlers/filterPostByTagHandler.mjs";
import { sortPostsByDateListener } from "./ui/posts/sortPostsByDateListener.mjs";
import { navigateBack } from "./ui/common/handlers/navigateBack.mjs";
import { handleClickedUserUI } from "./api/profiles/handlers/handleClickedUserUI.mjs";
import { handleClickedUsersPosts } from "./api/posts/handleClickedUsersPosts.mjs";
import { handleLoggedInUserUI } from "./api/profiles/handlers/handleLoggedInUserUI.mjs";
import { displayProfileTabs } from "./ui/common/handlers/displayProfileTabs.mjs";

const router = () => {
  const pathname = window.location.pathname;
  const headerThemeToggleBtn = document.querySelector("#header-theme-toggle-btn");
  const themeToggleBtn = document.querySelector("#theme-toggle-btn");

  switch (pathname) {
    case "/index.html":
    case "/":
      loginFormHandler();
      headerThemeToggleBtn.addEventListener("click", toggleColourTheme);
      applySystemTheme();
      break;
    case "/register/index.html":
    case "/register/":
      headerThemeToggleBtn.addEventListener("click", toggleColourTheme);
      applySystemTheme();
      registerFormHandler();
      break;

    case "/feed/index.html":
    case "/feed/":
      // Save page to session storage for navigating purposes
      saveToSessionStorage("previousPage", window.location.href);
      themeToggleBtn.addEventListener("click", toggleColourTheme);
      headerThemeToggleBtn.addEventListener("click", toggleColourTheme);
      applySystemTheme();
      toggleAsideSearchbar();
      closeSearchBarOnKeypress();
      closeSearchbarOnClick();
      toggleSortDropdownMenu();
      closeSortDropDownByClickOutside();
      closeSortDropdownByEscKey();
      createPostHandler();
      setupInfiniteScroll();
      searchInputEventListeners();
      setupNewPostButtonListeners();
      applyNewPostStateFromURL();
      setupClickOutsideNewPostHandler();
      logOut();
      initializeFilterPostsByTag();
      sortPostsByDateListener();
      break;
    case "/profile/index.html":
    case "/profile/":
      // Save page to session storage for navigating purposes
      saveToSessionStorage("previousPage", window.location.href);
      displayProfileTabs();
      handleLoggedInUserUI();
      themeToggleBtn.addEventListener("click", toggleColourTheme);
      applySystemTheme();
      setupNewPostButtonListeners();
      getUserPostsHandler();
      logOut();
      break;

    case "/post/index.html":
    case "/post/":
      // -- Theme --
      themeToggleBtn.addEventListener("click", toggleColourTheme);
      headerThemeToggleBtn.addEventListener("click", toggleColourTheme);
      applySystemTheme();
      // Display post
      specificPostHandler();
      displayUpdateModalListener();
      navigateBack();
      break;

    case "/user/index.html":
    case "/user/":
      themeToggleBtn.addEventListener("click", toggleColourTheme);
      applySystemTheme();
      setupNewPostButtonListeners();
      displayProfileTabs();
      handleClickedUsersPosts();
      handleClickedUserUI();
      logOut();
  }
};

router();
