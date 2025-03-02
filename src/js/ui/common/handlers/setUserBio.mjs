export const setUserBio = (userProfile, element, fallBackText = "") => {
  const user = userProfile;
  const userData = user?.bio || fallBackText;
  document.querySelector(element).textContent = userData;
};
