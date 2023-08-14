
// get element by id
// let title = document.getElementById('title').style.color = 'red';

//  title = document.getElementsByClassName('card-title');

//  console.log(title[0]);
//  title[0].style.color = 'red'

 // get elements by tag name

//  const lis = document.getElementsByTagName('li');
//  console.log(lis);


const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index) {
  li.style.background = '#ccc';
});

// or using for loop

for(let i=0; i < liEven.length; i++) {
  liEven[i].style.background = '#f4f4f4';
}