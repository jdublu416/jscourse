//Event Bubbling
//the event on the DOM bubbling up to a parent.

// document.querySelector('.card-title').addEventListener('click', function() {
//   console.log('card-title');// When you click on the child it bubbles up to the parent and triggers the event listener for them
// });
// document.querySelector('.card-content').addEventListener('click', function() {
//   console.log('card-content');
// });
// document.querySelector('.card').addEventListener('click', function() {
//   console.log('card');
// });
// document.querySelector('.col').addEventListener('click', function() {
//   console.log('col');
// });

//Event Delegation (opposite) where we put the listener on one of the parent elements and then use logic inside of the eventlistener to target the element we want

// const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click', deleteItem);//This only works on the first item deleted and if you added another list item dynamically, it wont target it either

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
//   if (e.target.parentElement.className === 'delete-item secondary-content') {
//     console.log('item deleted'); // in order for this to work the className has to be all the classes
//   }
if (e.target.parentElement.classList.contains('delete-item')) {
    console.log('item deleted'); // doing it this way allows for an addition of other classes later on..it doesnt have to be an exact match whereas example above does.
    e.target.parentElement.parentElement.remove(); //this line of code removes the 'grandparent' element...grabbing and deleting all within.
    //the e.target is the icon whose parent is the a tag and its parent is the li thus deleting the whole listItem
  }
}
