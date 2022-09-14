Array reduce is a Javascript array function that reduces an array to a single value useing a reducer function

```javascript

array.reduce((acc, char, idex , array)=>{...function},acc_initial_value)

```

example use case :
```javascript
chars = [

  {

    name: "A",

    height: "33",

    mass: "33",

  },

  {

    name: "B",

    height: "33",

    mass: "33",

  },

  {

    name: "C",

    height: "33",

    mass: "33",

  },

];

  

total_mass = chars.reduce((acc, ch) => {

  return acc + parseInt(ch.mass);

}, 0);

  

console.log(total_mass);
```