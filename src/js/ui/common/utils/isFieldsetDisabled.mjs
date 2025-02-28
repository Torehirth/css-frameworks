/**
 * Updates the state of a fieldset element by enabling or disabling it,
 * adjusting its opacity, and updating the submit button text.
 *
 * @param {boolean} state - The disabled state of the fieldset (true to disable, false to enable).
 * @param {number} opacity - The desired opacity value for the fieldset (e.g., 0.5 for semi-transparent).
 * @param {string} buttonText - The text to display on the submit button.
 * @example
 * // Disabling the fieldset, changing the opacity and button text to "Loading..."
 * isFieldsetDisabled(true, 0.5, "Loading...");
 *
 * // Enabling the fieldset, resetting the opacity and button text to "Submit"
 * isFieldsetDisabled(false, 1, "Submit");
 */
export const isFieldsetDisabled = (state, opacity, buttonText) => {
  const fieldset = document.querySelector("fieldset");
  const submitButton = document.querySelector("fieldset button");

  // Error handling in case fieldset or button doesn't exist in DOM
  if (fieldset && submitButton) {
    fieldset.disabled = state;
    fieldset.style.opacity = opacity;
    submitButton.textContent = buttonText;
  } else {
    console.error("Fieldset or submit button not found");
    return;
  }
};
