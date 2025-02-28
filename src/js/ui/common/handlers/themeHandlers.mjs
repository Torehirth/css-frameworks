const darkModeIcon = document.querySelector("#dark-mode-icon");
const lightModeIcon = document.querySelector("#light-mode-icon");
const headerDarkModeIcon = document.querySelector("#header-dark-mode-icon");
const headerLightModeIcon = document.querySelector("#header-light-mode-icon");

export const applySystemTheme = () => {
  const userPreference = localStorage.getItem("theme");

  const systemPreferenceIsDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const isDarkMode = userPreference === "dark" || (!userPreference && systemPreferenceIsDark);

  document.documentElement.classList.toggle("dark", isDarkMode);

  lightModeIcon.classList.toggle("hidden", !isDarkMode);
  headerLightModeIcon.classList.toggle("hidden", !isDarkMode);
  darkModeIcon.classList.toggle("hidden", isDarkMode);
  headerDarkModeIcon.classList.toggle("hidden", isDarkMode);
};

export const toggleColourTheme = () => {
  const isDarkMode = document.documentElement.classList.toggle("dark");

  lightModeIcon.classList.toggle("hidden", !isDarkMode);
  headerLightModeIcon.classList.toggle("hidden", !isDarkMode);
  darkModeIcon.classList.toggle("hidden", isDarkMode);
  headerDarkModeIcon.classList.toggle("hidden", isDarkMode);

  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
};
