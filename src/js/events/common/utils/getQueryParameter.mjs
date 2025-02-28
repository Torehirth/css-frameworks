export const getQueryParameter = (postId) => {
  const queryParam = window.location.search;
  const searchParams = new URLSearchParams(queryParam);
  const hasId = searchParams.has(postId);
  if (!hasId) {
    return;
  }
  const id = searchParams.get(postId);
  return id;
};
