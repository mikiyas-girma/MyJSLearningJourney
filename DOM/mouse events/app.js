
// mouse events 
let val;
const card = document.querySelector('.card');
const heading = document.querySelector('h5');
const clearBtn = document.querySelector('.clear-tasks')

val = card;
val = clearBtn;

// clearBtn.addEventListener('click', runEvent);
// Doubleclick
// clearBtn.addEventListener('dblclick', runEvent);
// Mousedown
// clearBtn.addEventListener('mousedown', runEvent);
// Mouseup
// clearBtn.addEventListener('mouseup', runEvent);
// Mouseenter
// card.addEventListener('mouseenter', runEvent);
// Mouseleave
// card.addEventListener('mouseleave', runEvent);
// Mouseover
// card.addEventListener('mouseover', runEvent);
// Mouseout
// card.addEventListener('mouseout', runEvent);
// Mousemove
// card.addEventListener('mousemove', runEvent);





// event handler function
function runEvent(e) {
  
  console.log(`EVENT TYPE : ${e.type} `);
  
  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
  document.body.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 50)`;
  
  e.preventDefault();
}

console.log(val);