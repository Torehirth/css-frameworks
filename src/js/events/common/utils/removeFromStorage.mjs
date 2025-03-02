/**
 * Removes an item from local storage.
 *
 * @param {string} key - The key of the item to remove from local storage.
 *
 * @example
 * // Assuming local storage contains an item with key 'user'
 * removeFromStorage('user');
 * // The item with key 'user' is now removed from local storage
 */
export const removeFromStorage = (key) => {
  localStorage.removeItem(key);
};

