let val;
// you can look up documentation on the MDN date object for js 
const today = new Date()
let birthday = new Date('9-10-1981 11:22:32') 
birthday = new Date('September 10, 1981') 
birthday = new Date('9/10/1981 11:22:32')

val = today.getMonth(); // 7 todays month is Aug and it is one off bc it starts zero (Jan)
val = today.getDate()
val = today.getDay() // 0 which is Sunday- Wed would be 4
val = today.getFullYear() // 2019
val= today.getHours() // 23 for 11pm
// can also get the minutes, seconds, and milliseconds

// current time stamp
val = today.getTime();

console.log(val);