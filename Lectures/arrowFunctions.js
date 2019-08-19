// Arrow functions
// Function expression
        // const sayHello = function(){
        //     console.log("hello");
        // }
//converted to an arrow function
        // const sayHello = () => {
        //     console.log("hello");
        // }
//you can make it further compact since the body is only one line you do not need the curly braces, but you can take it further by returning "hello" without the console.log and then console.log the function call

        // const sayHello = () => console.log("Hello");

        // sayHello();

        // const sayHello = () => "Hello";

        // console.log(sayHello());

//you can get into trouble if you are returning an object literal you will get an undefined value because the computer will think the curly braces are the function code body and not for an object

        // const sayHello = () => {msg: 'Hello'};

        // console.log(sayHello());

//To fix this you have to wrap the object literal with parentheses

        // const sayHello = () => ({msg: 'Hello'});

        // console.log(sayHello());

//If you have parameters then you will need to wrap them in parentheses, you dont need them for a single parameter

        // const sayHello = name => console.log(`Hello ${name}`);

        // sayHello('Jw');

        // const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

        // sayHello('Jw', 'Smith');

//You can use arrow functions as callbacks

const users = ['Nathan', 'John', 'William'];

const nameLengths = users.map(name => name.length);
console.log(nameLengths);

//fetch example reconfigured with arrow functions
const getAPIData =() => {
    fetch('https://api.github.com/users')
      .then(res => res.json())
      .then(data => {
        let output = '';
        data.forEach(user => {
          output += `User :${user.login}   `;
        });
        // document.getElementById('output').innerHTML = output;
        console.log(output);
      })
      .catch(err => console.log(err))
  }

  console.log(getAPIData());