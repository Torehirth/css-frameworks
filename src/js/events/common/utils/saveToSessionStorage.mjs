/**
 * Saves a value to session storage under the specified key.
 *
 * @param {string} key - The key under which the value will be stored.
 * @param {*} value - The value to be stored. It will be stringified to JSON.
 *
 * @example
 * // Save an object to session storage
 * saveToSessionStorage('user', { name: 'John Doe', age: 30 });
 * // The object { name: 'John Doe', age: 30 } is now stored in session storage under the key 'user'.
 *
 * @example
 * // Save a string to session storage
 * saveToSessionStorage('token', 'abc123');
 * // The string 'abc123' is now stored in session storage under the key 'token'.
 */
export const saveToSessionStorage = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};
