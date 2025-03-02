export const getUserNameQueryParameter = (userName) => {
  const queryParam = window.location.search;
  const searchParams = new URLSearchParams(queryParam);
  const hasName = searchParams.has(userName);
  if (!hasName) {
    return;
  }
  const name = searchParams.get(userName);
  return name;
};
