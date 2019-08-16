const num1 = 100;
const num2 = 50;
let val;

//Simple Math with numbers with basic operators
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math object we can use with js

val = Math.PI;
val = Math.E;
val = Math.round(2.4); //this will round with normal rounding rules
//if you want to specify your own rules
val = Math.ceil(2.4); // 3
val = Math.floor(2.8); // 2

//Square
val = Math.sqrt(64); // 8
val = Math.abs(-3); // 3

val = Math.pow(8, 2); // 64
val = Math.pow(8, 4); // 4096

//Min and Max returns from csv
val = Math.min(45, 16, 58, 12, 7, 67); // 7
val = Math.max(45, 16, 58, 12, 7, 67); // 67

// Random decimal with this method. All this gives you is a random decimal between zero and 1.  To use this to our advantage we can modify it a bit
val = Math.random();
val = Math.random() * 20; // this gives you a random number between 0-19, 
// so you can add a 1 to make the random number between 1-20
val = Math.random() * 20 + 1;
// This is great but you probably don't want the decimals so you wrap it
val = Math.floor(Math.random() * 20 + 1);
console.log(val);
