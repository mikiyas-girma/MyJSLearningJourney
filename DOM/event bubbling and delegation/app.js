// EVENT BUBBLING

/* 
document.querySelector('.card-title').addEventListener('click', function(){
  console.log('card title');
});

document.querySelector('.card-content').addEventListener('click', function(){
  console.log('card content');
});

document.querySelector('.card').addEventListener('click', function(){
  console.log('card');
});

document.querySelector('.col').addEventListener('click', function(){
  console.log('col');
}); 
*/



// deleting items with function
/*
 const delItem = document.querySelectorAll('li>a.delete-item');

delItem.forEach(item => {
  item.addEventListener('click', deleteItem)
});


function deleteItem(e){
  // console.log(e.target.parentElement.parentElement);
  e.target.parentElement.parentElement.remove();
  e.preventDefault();
  
  console.log('deleted');
}

 */


// the same functionality as above with event delegation as follows

// event delegation

const del = document.querySelector('.delete-item');
// console.log(del);
// del.addEventListener('click', deletItem);


// so as delegation to work
document.body.addEventListener('click', deletItem);

function deletItem(e){
  e.preventDefault();

  // if(e.target.parentElement.className === 'delete-item secondary-content'){ console.log(e.target);
  //   e.target.parentElement.parentElement.remove();
  //  }

  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }
}