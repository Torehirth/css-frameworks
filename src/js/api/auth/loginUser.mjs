import { API_BASE_URL, API_AUTH_ENDPOINT, API_LOGIN_ENDPOINT } from "../../constants/api.mjs";
import { saveToStorage } from "../../events/common/utils/saveToStorage.mjs";
import { displayMessage } from "../../ui/common/displayMessage.mjs";
import { isFieldsetDisabled } from "../../ui/common/utils/isFieldsetDisabled.mjs";
import { createAPIRequestHeader } from "../utils/createAPIRequestHeader.mjs";

export const loginUser = async (credentialsFromForm) => {
  const loginURL = `${API_BASE_URL}${API_AUTH_ENDPOINT}${API_LOGIN_ENDPOINT}`;
  const form = document.querySelector("#login-form");
  const options = createAPIRequestHeader("POST", credentialsFromForm);

  try {
    // Disable fieldset/form when calling the API
    isFieldsetDisabled(true, 0.5, "Loading...");

    // Fetch API
    const response = await fetch(loginURL, options);
    // Access response message
    const json = await response.json();

    if (!response.ok) {
      throw new Error(json.errors?.[0]?.message || "Login failed. Please try again later.");
    }
    // Save user info to local storage
    saveToStorage("user", json);
    // Display success
    displayMessage("#info-message", "success", "Successful login 👋");
    // Redirect after successful login
    window.location.href = "/profile/index.html";
  } catch (err) {
    console.error(err.message);
    // Catches the error further up and displays only the message
    displayMessage("#info-message", "warning", err.message);
    form.reset();
  } finally {
    setTimeout(() => {
      form.reset();
      isFieldsetDisabled(false, 1, "Log in");
    }, 2000);
  }
};
