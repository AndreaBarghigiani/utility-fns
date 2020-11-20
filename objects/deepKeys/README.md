# `deepKeys`
Returns **all** the keys in an object. Created this at the place of [Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) because this will retrieve only the property that are not nested.

```js
const user = {
  id: 1,
  createdAt: '2020-02-12T04:41:58.971Z',
  name: 'Leonard Walsh',
  email: 'Eloisa_Rath53@hotmail.com',
  phoneNumber: '(778) 711-9792 x4353',
  about: 'Magnam consequatur animi eaque molestiae autem qui qui earum.',
  url: 'https://marjorie.biz',
  image: {
    url: 'http://lorempixel.com/640/480'
  },
  address: {
    city: 'Boylehaven',
    state: 'South Dakota',
    country: 'Comoros',
  },
  company: {
    name: 'Terrence McCullough',
    phrase: 'Switchable exuding forecast'
  },
  finance: {
    account: '31897722',
    amount: '241.72',
  }
}

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
```
As you can see from the example above `Object.keys()` is only able to return the first level deep of an Object while `deepKey()` can will print all the properties in the object included the nested ones. For the nested properties the string will show the full path to each property included.
