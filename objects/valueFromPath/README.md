# `valueFromPath`
Gets the value stored in an object by passing the path, found this useful while working with the result of [deepKeys](../deepKeys).

```js
valueFromPath( 'image.url', user ); // 'http://lorempixel.com/640/480'
valueFromPath( 'not.exists', user ); // undefined

// You'll find the user object in /base/data.js
```
