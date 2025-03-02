import { API_BASE_URL, API_AUTH_ENDPOINT, API_REGISTER_ENDPOINT } from "../../constants/api.mjs";
import { displayMessage } from "../../ui/common/displayMessage.mjs";
import { isFieldsetDisabled } from "../../ui/common/utils/isFieldsetDisabled.mjs";
import { createAPIRequestHeader } from "../utils/createAPIRequestHeader.mjs";
import { loginUser } from "../auth/loginUser.mjs";

export const registerUser = async (dataFromForm) => {
  const registerURL = `${API_BASE_URL}${API_AUTH_ENDPOINT}${API_REGISTER_ENDPOINT}`;
  const form = document.querySelector("#register-form");
  const options = createAPIRequestHeader("POST", dataFromForm);

  try {
    // Disable fieldset/form when calling the API
    isFieldsetDisabled(true, 0.5, "Registers account..");
    // Fetch API
    const response = await fetch(registerURL, options);
    // Access response message
    const json = await response.json();

    if (!response.ok) {
      throw new Error(json.errors?.[0]?.message || "Registration failed. Please try again later.");
    }
    // Display success message after successful registration and redirect right after
    displayMessage("#info-message", "success", "Login successful 🎉");

    // User then gets logged in and automatically redirected to profile page by calling the loginUser function, with credentials from the object from handleLoginFormSubmit
    await loginUser({ email: dataFromForm.email, password: dataFromForm.password });
  } catch (err) {
    console.error(err.message);
    // Catches the error further up and displays only the message
    displayMessage("#info-message", "warning", err.message);
    form.reset();
  } finally {
    // Enable fieldset/form after calling the API
    isFieldsetDisabled(false, 1, "Create account");
  }
};
