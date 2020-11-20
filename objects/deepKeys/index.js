/**
 * This function will get all the keys in an object.
 * @param {Object} obj The object we want to get all the keys.
 * @returns {Array} Array of strings representing the keys in the object.
 */
export const deepKeys = (obj) =>
  Object.keys(obj)
    .filter((key) => obj[key] instanceof Object)
    .map((key) => deepKeys(obj[key]).map((k) => `${key}.${k}`))
	.reduce((x, y) => x.concat(y), Object.keys(obj));
