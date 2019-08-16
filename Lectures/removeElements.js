// Replace Elements in the DOM
const newHeading = document.createElement('h3');
newHeading.id = 'task-title';
newHeading.appendChild(document.createTextNode('Task List'));

//get old heading
const oldHeading = document.getElementById('task-title');
//Parent
const cardAction = document.querySelector('.card-action');
//Replace
cardAction.replaceChild(newHeading, oldHeading);


//Remove Elements from the DOM
const lis = document.querySelectorAll('li')

const list = document.querySelector('ul')

lis[0].remove();

//remove a child
list.removeChild(lis[3]);

// Classes and attributes

const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test')
link.classList.remove('test')
val = link;

//Attributes

val = link.getAttribute('href')
val = link.setAttribute('href', 'http://google.com');
val = link.hasAttribute('title');
val = link.setAttribute('title', 'Google')

link.removeAttribute('title')
val = link



console.log(val);