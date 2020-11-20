/**
 * Takes the defined path and will check if the object passed contains it, and if so will return it.
 * @param {string} path The path where we should find the value.
 * @param {Object} obj The object where we want to look into.
 * @returns {any | undefined} The value if found and undefined otherwise.
 */
const valueFromPath = (path, obj) => {
	path.split(".").forEach((sub) => {
	  if (obj) {
		obj = obj[sub];
	  }
	});
  
	return obj;
  };
