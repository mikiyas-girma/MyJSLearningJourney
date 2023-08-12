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
  // dom content load event
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add task event
  form.addEventListener('submit', addTask);
  // remove task
  taskList.addEventListener('click', deleteItem);
  // delete permanently from local storage
  taskList.addEventListener('click', deleteFromLocal);
  // clear all the tasks
  clearBtn.addEventListener('click', clearTasks);
  // filter through task
  filter.addEventListener('keyup', filterTasks);
}

function getTasks() {
  
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

   // load to ul from the local storage 

   for(let i = 0; i < tasks.length; i++) {
    // Create li element
 const li = document.createElement('li');
 // Add class
 li.className = 'collection-item';
 // Create text node and append to li
 li.appendChild(document.createTextNode(tasks[i]));
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
 }


}


// Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  } else {

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

    // Also save it to local storage
    persistToLocal(taskInput.value);

  // Clear input
  taskInput.value = '';

  }

  e.preventDefault();
  // console.log(li)
}

// lets persist the tasks to local storage 

function persistToLocal(task) {
let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
    // Clear input
    taskInput.value = '';
}


// delete task from local storage

function deleteFromLocal(taskItem) {
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task, index) {
    if(taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

/* lets add the functionality that the delete icon to delete items from the list */

 function deleteItem(e) {
    if(e.target.parentElement.classList.contains('delete-item'))
    if(confirm('Are you sure'))
  e.target.parentElement.parentElement.remove();

// also delete it from local storage
  deleteFromLocal(e.target.parentElement.parentElement);

 }

 // let do the clear tasks btn to remove all tasks all in once

 function clearTasks() {

  console.log(taskList);
  // two ways to implement this 
  if(confirm('you sure to clear all the tasks?'))
  // taskList.innerHTML = '';

  // or using loop (this is faster way )
  while(taskList.firstChild)
    taskList.removeChild(taskList.firstChild);

  // also lets clear it from localstorage also
  localStorage.removeItem('tasks');
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


