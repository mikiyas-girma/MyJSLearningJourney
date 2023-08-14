
// creating new li item from scratch using js and add to the list
/*

 <li class="collection-item">
List Item
<a href="#" class="delete-item secondary-content">
  <i class="fa fa-remove"></i>
</a>
</li>
 */

let val;

const item = document.createElement('li');
item.className = 'collection-item';

const content = document.createTextNode('The new list item');

item.appendChild(content);

const link = document.createElement('a');
link.setAttribute('href', '#');
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>';

item.appendChild(link);

// now finally appending to list items that already exists

const lists = document.querySelector('ul.collection');

lists.appendChild(item);



val = lists;

console.log(val);