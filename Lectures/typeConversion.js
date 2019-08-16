let val;

//Number to string
val = String(5);
val = String(4+4)

//Bool to string
val = String(true)

//Date to a String
val = String(new Date());

//Array to String
val = String([1,2,3,4])

//to String method
val = (5).toString();
val = (true).toString();


//String to numbers
val = '5';
val = Number('5');
// true will return a one and false will return a 0
val = Number(true);
val - Number(false)

//*****/if a string or bool then returns NaN
val = parseInt('100')
val = parseFloat('100.30') //use for decimals

//Output
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed(2));

/*********Type Coersion- one type changed into another done 'under the hood', happening automatically. Js will concatenate two values if one is a number and one is a string.*/
const val1 = 5
const val2 = 6
const sum = val1 + val2

console.log(sum);
console.log(typeof sum);


