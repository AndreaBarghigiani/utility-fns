# `isObject`
This function will check if the param is an object or not, will return `true` or `false` based on the check.

```js
const obj = {
	name: 'Andrea Barghigiani',
	career: 'FrontEnd Developer'
}
const string = 'Andrea Barghigiani'

isObject(obj); // true
isObject( string ); // false
