/**
 * Displays a message in a specified container with a specific message type.
 *
 * @param {string|HTMLElement} container - The container where the message will be displayed.
 * Can be a CSS selector string or an actual HTML element.
 * @param {string} messageType - The type of message to display. Expected values are "error", "warning", or "success".
 * @param {string} message - The message content to display inside the container.
 *
 * @example
 * Using a CSS selector
 * displayMessage("#message-container", "success", "Your changes have been saved!");
 *
 * @example
 * Using an HTML element
 * const containerElement = document.querySelector("#message-container");
 * displayMessage(containerElement, "error", "An error occurred while processing your request.");
 */

export const displayMessage = (container, messageType, message) => {
  // Handles inserting container as string or as an HTML element.
  let messageContainer = container;
  if (typeof messageContainer === "string") {
    messageContainer = document.querySelector(container);
  }

  messageContainer.classList.remove("error", "warning", "success");
  messageContainer.classList.add(messageType);
  messageContainer.innerText = message;
};
