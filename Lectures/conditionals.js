// if(something) {
//     do something
// }else{
//     do something else
// }

//Assignment
const id = 100;

// //Equal to
// if(id=='100') {
//     console.log('correct');
// } // correct This does not take type into consideration. It is like a loose equal to

// // Is exactly equal to (value and type)
// if(id ===100) {
//     console.log('correct');
// }else{
//     console.log('not correct');
// }

// //not equal
// if(id !=100) {
//     console.log('correct');
// }else{
//     console.log('not correct');
// }

// //not equal to value and type
// if(id !==100) {
//     console.log('correct');
// }else{
//     console.log('not correct');
// }

if (typeof id !== 'undefined') {
  console.log(`The id is ${id}`);
} else {
  console.log('no idea found');
}

//IF ELSE IF
const color = 'yellow';

if (color === 'red') {
  console.log('Color is red');
} else if (color === 'blue') {
  console.log('Color is blue');
} else {
  console.log('Color is not red or blue');
}

//Logical operators < , >, <=, >=, && And, || or

// Ternary operator

console.log(id === 100 ? 'Correct' : 'Incorrect');

//Switches
const flower = 'Rose';

switch (flower) {
  case 'Rose':
    console.log('The flower is a Rose');
    break;
  case 'Habiscus':
    console.log('The flower is an Habiscus');
    break;
  default:
    console.log('The flower is not a Rose or an Habiscus');
    break;
}
