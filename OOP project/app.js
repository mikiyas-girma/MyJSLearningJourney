
// UI constructor
function UI() {}

// book constructor

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// showAlert method as prototype method for UI
UI.prototype.showAlert = function(message, type) {

  const alertDiv = document.createElement('div');
  alertDiv.className = `alert ${type}`;
  alertDiv.textContent = message;
  // get parent element 
  const parent = document.querySelector('.container');
  const form =  document.querySelector('#book-form');

  parent.insertBefore(alertDiv, form);

}

UI.prototype.addBookToList = function (book) {
const list = document.getElementById('book-list');
const row = document.createElement('tr');
row.innerHTML = `
<td> ${book.title} </td>
<td> ${book.author} </td>
<td> ${book.isbn}</td>
<td> <a href="#" class= "delete-book"> <i class="fa-solid fa-xmark" style="color: #d10000;"></i> </a> </td>
`;

list.appendChild(row);
}

// remove book from a list

UI.prototype.deleteBook = function(target) {
    if(target.parentElement.classList.contains('delete-book'))
      target.parentElement.parentElement.parentElement.remove();

  };


UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// Event Listeners 

document.getElementById('book-form').addEventListener('submit', function(e) {
 
 const title = document.getElementById('title').value;
 const author = document.getElementById('author').value;
 const isbn = document.getElementById('isbn').value;

 const book = new Book(title, author, isbn,);

 const ui = new UI();

 if(title === '' || author === '' || isbn === '') {

  ui.showAlert('please insert all the fields', 'error');
   // remove alert box after 2 seconds
 setTimeout(() => {
  document.querySelector('.alert').remove();
 }, 2000);

 } else {
  ui.showAlert('Book added successfully', 'success');

 // add book tot list
 ui.addBookToList(book);

 ui.clearFields();

 // remove alert box after 2 seconds
 setTimeout(() => {
  document.querySelector('.alert').remove();
 }, 2000);
 
 }
 e.preventDefault();
})


// delete book from the list

document.querySelector('#book-list').addEventListener('click', function(e) {

  // Instantiate UI
  const ui = new UI();

  // Delete book
  ui.deleteBook(e.target);
  // Show message
  ui.showAlert('Book Removed!', 'success');

  // remove alert box after 2 seconds
 setTimeout(() => {
  document.querySelector('.alert').remove();
 }, 2000);

e.preventDefault();
});
