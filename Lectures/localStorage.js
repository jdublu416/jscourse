// set local storage item
// localStorage.setItem('name', 'John')
// localStorage.setItem('age', '30')

// set session Storage
// sessionStorage.setItem('name', 'James');

//most of the methods for each are the same...so if it works for local then most of the time it works for session

// localStorage.removeItem('name')

//get from storage

// const name = localStorage.getItem('name');
// const age= localStorage.getItem('age');

//Clear localStorage etc

// localStorage.clear();

// console.log(name, age);

// document.querySelector('form').addEventListener('submit', e => {
//   e.preventDefault();
//   const task = document.getElementById('task').value;
//   localStorage.setItem('task', task);
//   alert('Task saved')
//   console.log(task);
// });// you can grab input and save value in local Storage--passwords can be saved this way...
// The problem with this is that it can only save one task at a time, each event will over write what is saved in the local storage-- FIX THIS BY making an array of tasks and store as a string

document.querySelector('form').addEventListener('submit', e => {
    const task = document.getElementById('task').value;
  
    let tasks; //define tasks
  
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  
    alert('task saved');
    e.preventDefault(); // you get the task value but write a conditional that checks for tasks. if nothings exists in storage then the tasks array is formed. need to parse to JSON to store the value, even though normally we are saving objects. then we push the task into the array and setItem back to a string. This will keep adding new tasks to storage allowing for multiple values.
    // its actually a string formatted as an array.
  
    const allTasks = JSON.parse(localStorage.getItem('tasks'));
    allTasks.forEach(task => {
      console.log(task);
    });
  });
  
  //PS this creates a violation warning on the console for this function taking more that 50ms indicating it is verbose.
  