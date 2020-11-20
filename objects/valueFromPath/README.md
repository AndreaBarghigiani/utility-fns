# `valueFromPath`
Gets the value stored in an object by passing the path, found this useful while working with the result of [deepKeys](../deepKeys).

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
};

valueFromPath( 'image.url', user ); // 'http://lorempixel.com/640/480'
valueFromPath( 'not.exists', user ); // undefined
```
