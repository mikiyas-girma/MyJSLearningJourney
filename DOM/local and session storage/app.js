
// saving to local storage 

localStorage.setItem('name', 'mikiyas');
// removing from local storage
localStorage.removeItem('name');


// session storage
sessionStorage.setItem('name', 'john');

// saving multiple values to the same key as array of strings

document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value;
  
  let tasks;
  if(localStorage.getItem('tasks') === null){
  tasks = [];
  }else {
  tasks = JSON.parse(localStorage.getItem('tasks'));
}

tasks.push(task);
localStorage.setItem('tasks', JSON.stringify(tasks));
alert('tasks saved to local storage');

e.preventDefault();
// console.log(localStorage.getItem('tasks'));
});

const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(task => {
  console.log(task);
});