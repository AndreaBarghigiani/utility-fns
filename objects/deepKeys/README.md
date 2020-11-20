# `deepKeys`
Returns **all** the keys in an object. Created this at the place of [Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) because this will retrieve only the property that are not nested.

```js
Object.keys(user)
// Returns
[
  'id',          
  'createdAt',
  'name',        
  'email',
  'phoneNumber', 
  'about',
  'url',         
  'image',
  'address',
  'company',
  'finance'
]

deepKeys(user)
// Returns
[
  'id',              
  'createdAt',
  'name',            
  'email',
  'phoneNumber',     
  'about',
  'url',             
  'image',
  'address',         
  'company',
  'finance',         
  'image.url',
  'address.city',    
  'address.state',
  'address.country', 
  'company.name',
  'company.phrase',  
  'finance.account',
  'finance.amount'
]

// You'll find the data used in /base/data.js
```
As you can see from the example above `Object.keys()` is only able to return the first level deep of an Object while `deepKey()` can will print all the properties in the object included the nested ones. For the nested properties the string will show the full path to each property included.
