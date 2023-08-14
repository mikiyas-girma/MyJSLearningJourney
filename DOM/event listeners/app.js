
// event listeners and the event object 

let val;

const clearTasks = document.querySelector('.clear-tasks');

// using anonymous function
// clearTasks.addEventListener('click', function(){
//   console.log('task cleared!')
// })

// using named function as follows 

clearTasks.addEventListener('click', onclick);

// we can using # in the href or using event object to prevent default behaviour

function onclick(e){
  
  console.log('with Named cleared');
  clearTasks.textContent = 'cleared';
  e.preventDefault();
}

val = clearTasks;


console.log(val);