# `isObjectEmpty`
This function will check if the passed object it is empty or not. If is not an object will return `false` anyway but if it **is** an object the function will return `true` if it is empty and `false` otherwise.

```js
const emptyObj = {};
const obj = {
	name: 'Andrea Barghigiani',
	career: 'FrontEnd Developer'
};
const string = 'Andrea Barghigiani'

isObjectEmpty( emptyObj ); // true
isObjectEmpty( obj ); // false
isObjectEmpty( string ); // false
```
