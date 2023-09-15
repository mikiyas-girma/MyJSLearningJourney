
//Destructuring assignment

// array destructuring
let a,b;
[a,b, ...rest] = [10, 20, 30, 40, 50];

console.log(a,b); // expected result:  10 20
console.log(rest); // expected result: 30 40 50


// object destructuring

const person = {
  name: "mikias",
  age: 22,
  gender: "male", 
  sayHello: function() {
    console.log('hello');
  }
};


// in older es5 way 

// const name = person.name,
//       age = person.age,
//       sayHello = person.sayHello;


// NOW in ES6 destructuring become more simpler and neat

const {name, age , sayHello} = person;


