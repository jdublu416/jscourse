// Mouse Events

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//Event Handler

const runEvent = e => {
  console.log(`Event type: ${e.type}`);
  // get Coordinates of the mouse
 heading.textContent = `Mouse X: ${e.offsetX} Mouse Y: ${e.offsetY}`
document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 140)`
};

// clearBtn.addEventListener('click', runEvent);
// clearBtn.addEventListener('dblclick', runEvent);
//  clearBtn.addEventListener('mousedown', runEvent);
//  clearBtn.addEventListener('mouseup', runEvent);
//  card.addEventListener('mouseenter', runEvent);//enter and leave occur when the mouse goes in and out of the element
//  card.addEventListener('mouseleave', runEvent);
//  card.addEventListener('mouseover', runEvent);//over and out runs on the elements within the parent element as well as over and out on elements within the parent
//  card.addEventListener('mouseout', runEvent);
//  card.addEventListener('mousein', runEvent);
 card.addEventListener('mousemove', runEvent);



