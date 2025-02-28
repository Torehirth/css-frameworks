import { getPostsHandler } from "../../../api/posts/handlers/getPostsHandler.mjs";

const loader = document.querySelector("#loader");
export const setupInfiniteScroll = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Load more posts when loader is in view (also loads posts initially..).
          getPostsHandler();
        }
      });
    },
    { rootMargin: "75px" } // Trigger loading 100px before reaching the loader
  );

  return observer.observe(loader); // Observe the loader element (loader must be in DOM).
};
