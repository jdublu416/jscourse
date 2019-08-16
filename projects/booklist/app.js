// Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI constructor
function UI() {}
    //this will be an empty constructor that will make use of prototypes for properties and methods...

UI.prototype.addBookToList = function(book) {
  const list = document.getElementById('book-list');
//Create tr element
  const row = document.createElement('tr');
// insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;
  list.appendChild(row);
};

//Show alert
UI.prototype.showAlert = function(message, className) {
  const div = document.createElement('div');
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
    //Get parent/before variables for the insertBefore method
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');
  container.insertBefore(div, form); // Parent.insertBefore(what you want to insert, what you want to insert it before);
  setTimeout(function() {
    document.querySelector('.alert').remove();
  }, 3000);
}

//Delete
UI.prototype.deleteBook = function(target) {
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}


//Clear Fields
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
};

//Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e) {
//GET form values
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

//instantiating the new book
  const book = new Book(title, author, isbn);

// instantiate UI
  const ui = new UI();

//Validate input
  if (title === '' || author === '' || isbn === '') {
    ui.showAlert('Please fill in all fields', 'error');
  } else {
// Add book to list, show alert for success, clear fields
    ui.addBookToList(book);
    ui.showAlert('Book Added!', 'success');
    ui.clearFields();
  }

  e.preventDefault();
});

document.getElementById('book-list').addEventListener('click', function (e){
const ui = new UI();
ui.deleteBook(e.target);
ui.showAlert("Book Removed!", 'success');
e.preventDefault();
})