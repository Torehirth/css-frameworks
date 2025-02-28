import {
  displayFollowersSection,
  displayFollowingSection,
  displayPostsSection,
} from "./profileTabHandlers.mjs";

export const displayProfileTabs = () => {
  displayPostsSection();
  displayFollowersSection();
  displayFollowingSection();
};
