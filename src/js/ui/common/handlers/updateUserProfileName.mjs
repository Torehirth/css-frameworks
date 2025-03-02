export const updateUserProfileName = (profile) => {
  const { name } = profile;
  const nameElement = document.querySelector("#profile-name");
  // Capitalize the first letter of the name and makes the rest of name small letters
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  nameElement.innerText = formattedName;
};
