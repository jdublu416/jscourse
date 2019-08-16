// DOM selectors  single and multiple
    //single- only one thing is stored, will find only the first one found
    //multiple- when you want to select all or many 

//document.getElementById- can get things from the DOM like id, class, or innerhtml

// console.log(document.getElementById('task-title').innerHTML);

// //change styling
// document.getElementById('task-title').style.background = '#333';
// document.getElementById('task-title').style.color = '#fff';
// document.getElementById('task-title').style.padding = '5px';

// //change content
// document.getElementById('task-title').textContent = 'Task-List';
// document.getElementById('task-title').innerText = 'My Tasks';
// document.getElementById('task-title').innerHTML = '<span style="color:red">Task List</span>';

// // use a variable to clean up the busyness of the code

// const taskTitle = document.getElementById('task-title');

// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';

console.log(document.querySelector('#task-title'));// this is a single selector
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color ='red'
document.querySelector('li:last-child').style.color ='blue'
document.querySelector('li:nth-child(3)').style.color ='yellow'
document.querySelector('li:nth-child(4)').textContent ='Hello World'
document.querySelector('li:nth-child(odd)').textContent ='Hello World' // ODD=>this only works on the first odd bc it is single selector
