
// maps in js

const map1 = new  Map();

// keys of map can be any type

const key1 = "some string",
      key2 = {},
      key3 = function() {};


// set map values by keys

map1.set(key1, "value of key 1");
map1.set(key2, "value of key 2");
map1.set(key3, "value of key 3");

// console.log(`${key1}: ${map1.get(key1)}`);

// count values
// console.log(map1.size)

// iterating maps to get key and values

for(let [key, value] of map1) {
  // console.log(key , value);
}

// Iterate keys only
// for(let key of map1.keys()) {
//   console.log(key);
// }

// Iterate values only
// for(let value of map1.values()) {
//   console.log(value);
// }

// Loop with forEach
// map1.forEach(function(value, key){
//   console.log(`${key} = ${value}`);
// });


// converting in to arrays
// Create an array of the key value pairs
// const keyValArr = Array.from(map1);
// console.log(keyValArr);
// console.log(keyValArr[0][0]);

// Create an array of the values
// const valArr = Array.from(map1.values());
// console.log(valArr);

// Create an array of the keys
// const keyArr = Array.from(map1.keys());
// console.log(keyArr);
