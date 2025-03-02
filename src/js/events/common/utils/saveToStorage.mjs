/**
 * Saves a JSON object to localStorage under the specified key.
 *
 * @param {string} key - The key under which the data will be stored in localStorage.
 * @param {Object} value - The JSON data to be stored. It will be stringified before storage.
 */

export const saveToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
