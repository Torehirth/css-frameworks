/**
 * Retrieves data from session storage and parses it as JSON.
 *
 * @param {string} key - The key of the item to retrieve from session storage.
 * @returns {any} The parsed data from session storage, or undefined if the item is not found.
 * @example
 * // Assuming sessionStorage contains an item with key 'user' and value '{"name":"John"}'
 * const user = getFromSessionStorage('user');
 * console.log(user); // { name: "John" }
 */
export const getFromSessionStorage = (key) => {
  const data = JSON.parse(sessionStorage.getItem(key));
  if (data) {
    return data;
  } else {
    console.error(`${data} was not found`);
    return;
  }
};
