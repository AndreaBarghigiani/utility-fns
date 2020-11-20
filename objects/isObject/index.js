/**
 * The function checks if the value passed is an object or not. 
 * @param {Object} obj The value we need to check if is an object.
 * @returns {boolean} If is an object or not.
 */
export const isObject = 
	(obj) => obj?.toString() === "[object Object]";
