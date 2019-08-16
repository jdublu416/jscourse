const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello my name is Brad';

let val;
// Concatenation - one will need to account for spaces and punctuation
val = firstName + lastName; // WilliamJohnson
val = firstName + ' ' + lastName + '!'; // William Johnson!

// Appending to a variable

val = 'Brad '; // Brad
val += 'Traversy'; // Brad Traversy

// Pay attention to your spaces with concatenation
val = 'Hello my name is ' + firstName + ' and I am' + age; // Hello my name is William and I am36
val = 'Hello my name is ' + firstName + ' and I am ' + age; // Hello my name is William and I am 36

// Escaping
val = "That's awesome, I can't wait"; // one solution is to use double quotes on the outside
val = "That's awesome, I can't wait"; // another solution is to 'escape' it by using the \

//Length
val = firstName.length; // 7

// Concat method
val = firstName.concat(' ', lastName, '!'); // William Johnson!

// Change Case
val = firstName.toUpperCase(); // WILLIAM
val = firstName.toLowerCase(); // william

// read only arrays
val = firstName[0]; // W

// indexof
val = firstName.indexOf('a'); // 5  *gives you the index from left to right
val = firstName.indexOf('l'); // 2 *gives you the index from left to right
val = firstName.indexOf('n'); // -1 *gives you a neg 1 value when it can't be found
val = firstName.lastIndexOf('l'); // 3 *gives you the l from the right to left

// charAt()
val = firstName.charAt('2'); // l

//Get last character *common formula in js to get the last character in a string
val = firstName.charAt(firstName.length - 1); // m

// substring()
val = firstName.substring(0, 4); // Will  *first parameter is where you start, second is how many characters you get back

//slice
val = firstName.slice(0, 5); // Willi *same as substring
val = firstName.slice(-3); // iam *this will get the last three letters of the string

// Split a string into an array
val = str.split(' '); // ["Hello", "my", "name", "is", "Brad"]

// replace
val = str.replace('Brad', 'Cameron'); //Hello my name is Cameron

// Includes()
val = str.includes('Hello'); // true
val= str.includes('Hi') // false

console.log(val);
