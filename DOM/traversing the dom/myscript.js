

// traversing the dom

let val;
const list = document.querySelector('ul.collection');
const listItems = document.querySelector('li.collection-item:first-child');
const nth_item = document.querySelector('li.collection-item:nth-child(3)');

val = listItems;
val = nth_item;

val = list;


// get child nodes and children elements
val = list.childNodes;
val = list.children;

// counting  children elements

val = list.childElementCount;

// get parent nodes
val =list;
val = list.parentElement;
val = list.parentElement.parentElement;

// get next and previous sibling elements 
val = list.nextSibling;
val = list.nextElementSibling;
val = listItems.nextElementSibling.nextElementSibling;
val = listItems.nextElementSibling.nextElementSibling.previousElementSibling;


console.log(val);