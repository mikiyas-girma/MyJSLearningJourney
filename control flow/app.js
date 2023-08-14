// let number =2;

// switch(number) {
//   case 1:
//   console.log('this is one');
//   break;

//   case 2:
//     console.log('this is two');
//     break;

//     default:
//       console.log('unknown number');
// }


// for-in  loop

// let person = {
//   name: 'mikias',
//   age: 22
// };

// console.log(person.name + ' ' + person.age); 

// for(let key in person) 
// console.log(key, person[key]);


// const cars=['vitz', 'bmw', 'motorolla', 'corolla', 'v8'];


// for-of loop allows us to deal with the value simply
// for(let model of cars)
// console.log(model)


// const movies ={
//   title: 'ab',
//   releaseYear: 2022,
//   category: 'comedy',
//   rating: 7.8
// };

// showProperties(movies);


// function showProperties(movies){
//   for(let key in movies )
//    if( typeof movies[key] === 'string')
//    console.log(key, movies[key]);
// }


// const array =[80,60,70];
// console.log(marks.length)

// function calculateGrade(marks) {
// average = calculateAverage(marks);

// if(average < 60) return 'F';
// if(average < 70 ) return 'D';
// if(average < 80 ) return 'C';
// if(average < 90 ) return 'B';
// return 'A';

// }

// console.log(calculateGrade(array));



// function calculateAverage(array) {
// let total=0;

// for(let value of array)
// total +=value;
// let average= total / array.length ;

// return average;
// }




// show stars function

// showStars(5);

// function showStars(rows) {

//   for (let row =1; row <= rows; row++) {
//   let pattern ='';
//   for(let i=1; i<=row; i++)
//     pattern +='*';
//     console.log(pattern);
//   }


// }


//  showPrimes(10);

// function showPrimes(limit) {

//   for(let number=2; number <=limit; number++) {
//     let isPrime = true;

//     for(let factor=2; factor < number; factor++) {
//     if(number % factor ==0)
//       isPrime = false;
//       break;
//   }
//   if(isPrime)
//   console.log(number);
// }
// }


// the below code does the same but with two different functions for the different functionalities


// showPrimes(20);


// function showPrimes(limit) {

//   for (let number = 2; number <= limit; number++)
//     if (isPrime(number))
//       console.log(number);

// }

// function isPrime(number) {

//   for (let factor = 2; factor < number; factor++)
//     if (number % factor == 0)
//       return false;

//   return true;
// }