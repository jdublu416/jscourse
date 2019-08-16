// Array and array methods
const numbers = [1,2,3,4,5,6];
const numbers2 = new Array(1,2,3,4,5,6);
const fruit = ['apple', 'banana', 'orange', 'pear', 'grapefruit']
const mixed = [22, 'string', true, undefined, null, {a:1, b:2}, new Date()]

let val;

//Array length
val = fruit.length; // 4

// Check if array
val = Array.isArray(numbers); //true

//Single value
val = numbers[3] //4
val= numbers [0] // 1

//Arrays are mutable:
    //insert into:
    numbers[2]= 100;
    //find index of value
    val = numbers.indexOf(100) //2
    // Add onto the end of the array
    numbers.push(250); //  [1, 2, 100, 4, 5, 6, 250]
    // Add on to the beginning
    numbers.unshift(120) // [120, 1, 2, 100, 4, 5, 6, 250]
    // Remove from end
    numbers.pop(); // [120, 1, 2, 100, 4, 5, 6]
    // take off from front of array
    numbers.shift(); // [1, 2, 100, 4, 5, 6]
    //Splice values
    numbers.splice(1, 1) //[ 1, 100, 4, 5, 6]
    // Reverse the array
    numbers.reverse();

    // Concatenate arrays together
    val = numbers.concat(numbers2) // [6, 5, 4, 100, 1, 1, 2, 3, 4, 5, 6]

    //Sorting Arrays
    val = fruit.sort(); //alphabetical order
    val = numbers.sort(); //this will sort by the first number in the array
    //sort in ascending
    val= numbers.sort(function(x,y){
        return x-y;
    })
    // sort in reverse order
    val= numbers.sort(function(x,y){
        return y-x;
    })

// Find 
function under5 ( num ) {
    return num < 5
}

val = numbers.find(under5); // this will find the first number that evaluates to under5

console.log(numbers);
console.log(val);