/**
 * Retrieves data from localStorage by the specified key and returns the `data` property from the parsed JSON object.
 *
 * @param {string} key - The key used to retrieve the data from localStorage.
 * @returns {*} The `data` property of the stored JSON object, or `undefined` if the key does not exist or the object does not have a `data` property.
 *
 * @example
 * // Retrieve the object in local storage by the key (ex: user).
 * getFromStorage("user");
 *
 * // Destructure the properties within the object (ex: name)
 * const { name } = getFromStorage("user");
 * console.log(name); // Output would for example be "Ola"
 */

export const getFromStorage = (key) => {
  const userObject = JSON.parse(localStorage.getItem(key));
  // Error handling using optional chaining operator to check if object exists, if null or undefined the result will be undefined, making userData an empty object.
  const userData = userObject?.data || {};
  return userData;
};
