

// js object 
// const address = {
//   street: 'derartu',
//   city: 'sheger',
//   zipcode: 178,
//   phone: 9393333
// };

//this traverses the object and tries to display all of its properties
// function showAddress(address) {
//   for (let val in address)
//     console.log(val, ':', address[val]);
// }

// showAddress(address);



// the date object
// const today = new Date();

// const birthday = new Date("2001-07-12T03:24:00"); // This is standardized and will work reliably

// console.log(`my birthday : ${birthday.toDateString()}`);
// console.log(`today : ${today.toDateString()}`);
// console.log(`now you are ${(today.getFullYear() - birthday.getFullYear())} years old`);



// cloning js objects 

const student1 = {
  name: "mikias",
  age: 22,
  department: "software engineering"
};

// console.log(student1);

// cloning student1 object using spread operator ...

const std2 ={...student1};

// As soon as its copied
// console.log(std2); 

// std2.name="yakob";
// console.log(std2);


// using object.assign() method

// const std3=Object.assign({}, student1);

// console.log(std3);


// creating objects, factory functions , constructor functions

// const address = {
//   street: 'derartu',
//   city: 'sheger',
//   zipcode: 178
// };

let address = createAddress('derartu', 'sheger', '17');
// console.log(address)


// factory function
function createAddress(street, city, zipcode) {
  return {
    street, 
    city,
    zipcode
  };
}

// constructor function

function YourAddress(street, city, zipcode) {
  this.street = street;
  this.city = city;
  this.zipcode = zipcode;
}


// to utilize the constructor function we have to initialize object

// let myaddress = new YourAddress('addis ketema', 'goba', '774');
// console.log(myaddress);

// array of objects

// let priceRanges =[
//   { label: '$', toolTip: "inExpensive" },
//   { label: '$$', toolTip: "Medium" },
//   { label: '$$$', toolTip: "Expensive" }
// ]

// console.log(priceRanges)

// sorting arrays

// const ar1 =[1,2,4,66,2];
// console.log(ar1);
// console.log(ar1.sort((a,b)=> b-a))

// const letters =['a','f', 'r','e'];
// console.log(letters.sort())
// console.log(letters.reverse())

const students =[
  {name: 'miki', id: 32},
  {name: 'Bini', id: 12},
  {name: 'beky', id: 42},
  {name: 'zed', id: 22}
];

/* its a common practice to change to the same letter case before comparing or sorting */



const student= students.sort(function(a,b) {

  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if(nameA < nameB) return -1;
  if(nameA > nameB) return 1;
  return  0;
});

// console.log(student);

// const numbers = arrayFromRange(2,5);
// console.log(numbers);

// function arrayFromRange(a,b) {
//   const num=[];
//   for(let i=a; i<=b; i++)
//    num.push(i);
//    return num;
//   }

  // custom includes function implementation

  // const terms = [1,4,66,2,6,3];
  // console.log(include(terms,11));

  // function include(array, searchElement) {
  //   for(val of terms)
  //   if(val == searchElement)
  //   return true;
  //   return false;
  // }

  // const numb = [1,2,3,4];
  // const output = move(numb, 1,-2);
  // console.log(output);

  // function move(array, index, offset) {

  //   const position = index + offset;
  //   if(position >= array.length || position < 0) {
  //     console.error('invalid offset ');
  //     return;
  //   }

  //   const output = [...numb];
  //   const element = output.splice(index, 1)[0];
  //   output.splice()
  //   output.splice(position, 0, element);
  //   return output;
  // }

  // const numbers =[1,2,3,4,1,1];
  // const count = countOccurences(numbers, 2);
  // console.log(count);

  // function countOccurences(array, searchElement) {
  //  let times=0;
  //   for(let val of array) {
  //   if(val == searchElement)
  //   times++;
  //   }
  //   return times;
  // }

  
  // numbers.reduce((times, searchElement) => {
  //   return times++
  // })

  const movies =[
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2017, rating: 3},
    {title: 'd', year: 2016, rating: 4.5}
  ];
  // displaying movies with rating > 4
//   for(let rate of movies) {
//   if(rate.rating > 4)
//   console.log(rate); 
// }

  /* all movies in 2018 with rating greater than 4
  sorted with their rating  in descending order and then
  pick their title */

 const titles = movies
 .filter(m => m.year ===2018 && m.rating > 4)
 .sort((a,b) => a.rating -b.rating )
 .reverse()
 .map(m => m.title);
  
//  console.log(titles);


  function sum(discount, ...prices) {
    const total = prices.reduce((a,b) => a + b);
    return total * (1 - discount);
  }

  // console.log(sum(0.1, 20,30,30));


const person = {
  firstName: 'mikiyas',
  lastName: 'girma',
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },
  set setName(newName) {

    if(typeof newName !== 'string')
    throw new Error('the entered is not a string');

    
    const parts = newName.split(' ')

    if(parts.length !== 2)
    throw new Error('please enter first and last name');
    
    this.firstName = parts[0]
    this.lastName= parts[1]
  }
};


// console.log(person.firstName);
// console.log(person.fullName)

// changing the name with setter method provided above
// trim( ) this method removes any whitespaces present
try {
  person.setName = ' abe mike '.trim(' ');
  
} catch (e) {
  alert(e);
}
// console.log(person.fullName);


// console.log(sum([1,2,3,4])); 

function sum(...values) {
  if(values.length === 1 && Array.isArray(values[0]))
  values = values[0];

 return values.reduce((a,b) => a +b );
}

const PI = 3.14;

const circle = {
  radius: 4,
  get area() {
    return PI * this.radius * this.radius;
  }
};
circle.area = 40; // this will not change the value of circle's area
// console.log(circle.area);


try {
  const numbers = [1, 2, 3, 4,1]; 
  
  const count = countOccurrences(numbers, 1); 
  
  console.log(count); 
  
} catch (e) {
   console.log(e.message);
}

function countOccurrences(array, searchElement) {

  if(!Array.isArray(array)) 
  throw new Error('invalid  passed argument !!')


  // let count = 0; 
  // for (let element of array)
  //   if (element === searchElement)
  //     count++;
  // return count;

  return array.reduce((accumulator, current) => {
    const occurrence = (current === searchElement) ? 1 : 0;
    // console.log(accumulator, current, searchElement);
    return accumulator + occurrence;
  }, 0);
}
