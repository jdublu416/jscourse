//Keyboard and Input Events

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

// Clear Input
taskInput.value = ''

// form.addEventListener('submit', runEvent);

taskInput.addEventListener('keyup', runEvent)

function runEvent (e) {
console.log(`event type: ${e.type}`);
console.log(e.target.value);

// heading.innerText = e.target.value //this will put the input to the h5
// e.preventDefault();
// // get input value
// console.log(taskInput.value);
}

// other types are keypress, focus/blur, cut/paste, input(will fire off for any input),
// change event usually on a select input type