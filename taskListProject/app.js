// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
  // remove task
  taskList.addEventListener('click', deleteItem);
  // clear all the tasks
  clearBtn.addEventListener('click', clearTasks);
  // filter through task
  filter.addEventListener('keyup', filterTasks);
}

// Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';

  e.preventDefault();
  console.log(li)
}

/* lets add the functionality that the delete icon to delete items from the list */



 function deleteItem(e) {
    if(e.target.parentElement.classList.contains('delete-item'))
    if(confirm('Are you sure'))
  e.target.parentElement.parentElement.remove();
 }

 // let do the clear tasks btn to remove all tasks all in once

 function clearTasks() {

  // two ways to implement this 
  if(confirm('you sure to clear all the tasks?'))
  // taskList.innerHTML = '';

  // or using loop (this is faster way )
  while(taskList.firstChild)
    taskList.removeChild(taskList.firstChild);

 }

 // filter tasks
 function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task) {
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  })
 }