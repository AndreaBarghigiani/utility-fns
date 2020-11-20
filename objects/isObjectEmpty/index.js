/**
 * The function internally uses isObject() to check if the parameter passed is an object or not.
 * @param {Object} obj The value we need to check.
 * @returns {boolean} If the object is emtpy or not.
 */
export const isObjectEmpty = (obj) => {
	if (!isObject(obj)) return false;
	for (const prop in obj) {
		if (obj.hasOwnProperty(prop)) {
		return false;
		}
	}

	return true;
};
