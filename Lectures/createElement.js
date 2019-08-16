// Create an element and add things to it.
const li = document.createElement('li');

li.className = 'collection-item';
li.id = 'new-item';
li.setAttribute('title', 'New Item');

//Create text node and append
li.appendChild(document.createTextNode('Hello World'));

//create new link element
const link = document.createElement('a');
link.className = 'delete item secondary-content';

//Add icon html
link.innerHTML = '<i class ="fa fa-remove"></i>';

//append  link into li
li.appendChild(link);

//append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);
