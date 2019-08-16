// Event Listeners- add

// document.querySelector('.clear-tasks').addEventListener('click', (e) => {
//     console.log('Hello World');
//     // e.preventDefault();
// })

const onClick = e => {
    console.log('Clicked');
    let val;
    val = e;
    // Event target element
    val = e.target; // shows the target of the event object
    val = e.target.className; // shows the classNames
    val = e.target.classList; // this will return a collection of the classes
  
    val = e.target.innerText = 'Hello'; // This will change the text of the button onClick
    val = e.type; //event Type
    val = e.timeStamp; // in number of sec
  
    // Coords event relative to the window
    val= e.clientY
    val= e.clientX
    // Coords event relative to the element
    val= e.offsetY
    val= e.offsetX
  
    console.log(val);
  };
  
  document.querySelector('.clear-tasks').addEventListener('click', onClick);
  // You can also have events for mouseover, keydown etc
  