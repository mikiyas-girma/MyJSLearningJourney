
// keyboard inputs and events 

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// taskInput.addEventListener('input', runEvent);
// form.addEventListener('submit', runEvent);
select.addEventListener('change', background);



function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  console.log(e.target.value)
  e.preventDefault();
}

function background(e) {
  e.preventDefault();

  document.body.style.background = `${e.target.value}`;

}