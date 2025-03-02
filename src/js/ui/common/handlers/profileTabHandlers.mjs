const postsTabBtns = document.querySelectorAll(".posts");
const followersTabBtns = document.querySelectorAll(".followers");
const followingTabBtns = document.querySelectorAll(".following");
const postsSection = document.querySelector("#posts");
const followersSection = document.querySelector("#followers");
const followingSection = document.querySelector("#following");
// --
const postsTabBtn = document.querySelector("#posts-tab-btn");
const followersTabBtn = document.querySelector("#followers-tab-btn");
const followingTabBtn = document.querySelector("#following-tab-btn");

export const displayPostsSection = () => {
  postsTabBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      postsSection.classList.remove("hidden");
      followersSection.classList.add("hidden");
      followingSection.classList.add("hidden");
      postsTabBtn.classList.add("pt-active");
      followersTabBtn.classList.remove("pt-active");
      followingTabBtn.classList.remove("pt-active");
      postsSection.scrollIntoView();
    });
  });
};

export const displayFollowersSection = () => {
  followersTabBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      followersSection.classList.remove("hidden");
      followingSection.classList.add("hidden");
      postsSection.classList.add("hidden");
      postsTabBtn.classList.remove("pt-active");
      followersTabBtn.classList.add("pt-active");
      followingTabBtn.classList.remove("pt-active");
      followersSection.scrollIntoView();
    });
  });
};

export const displayFollowingSection = () => {
  followingTabBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      followingSection.classList.remove("hidden");
      followersSection.classList.add("hidden");
      postsSection.classList.add("hidden");
      postsTabBtn.classList.remove("pt-active");
      followersTabBtn.classList.remove("pt-active");
      followingTabBtn.classList.add("pt-active");
      followingSection.scrollIntoView();
    });
  });
};
