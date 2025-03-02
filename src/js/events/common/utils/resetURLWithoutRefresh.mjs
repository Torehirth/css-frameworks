export const resetURLWithoutRefresh = () => {
  // Uses the History API to change the URL back to initial without the query parameter, and without refreshing the page
  const newURL = window.location.pathname;
  history.replaceState(null, "", newURL);
};
