
// now we replace h5 tag called tasks with h2 title 

const newHeading = document.createElement('h2');
const title = document.createTextNode('My tasks');

newHeading.appendChild(title);
newHeading.id = 'task-title';

const oldHeading = document.getElementById('task-title');
// console.log(oldHeading)

// get parent element

const parent = oldHeading.parentElement;

parent.replaceChild(newHeading, oldHeading);


// removing elements
// lets select elements from list item

const lis = document.getElementsByClassName('collection-item');

console.log(lis);
console.log(lis[2])
lis[2].textContent = 'to be deleted';

// this removes the above element
lis[2].remove();

// classes and attributes

const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0]; 

let val;

val = firstLi;
val = link;

// we can add new classes also remove existing classes from the classlist
val = link.className;
val = link.classList;
val = link.classList[1];
val = link.classList.add('test');
val = link.classList.remove('remove');

// getting and setting attributes 

val = link.getAttribute('href');
val = link.setAttribute('href', 'https://google.com');



console.log(val);