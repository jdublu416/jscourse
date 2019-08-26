// ES6 Sets store unique values of any type

const set1 = new Set();

//add values
set1.add(100);
set1.add('A string');
set1.add({
    name: 'John'
});
set1.add(true);
set1.add(true);// it still outputs =>  Set(4) {100, "A string", {…}, true}

console.log(set1);// it will not let you add a repeat value, all values will be unique
                    // output => Set(4) {100, "A string", {…}, true}

// const set2 = new Set([1, true, 'Adding a different way']);
// console.log(set2); //output => Set(3) {1, true, "Adding a different way"}


//Get count
// console.log(set1.size); //4

//check for values
// console.log(set1.has(100));// true
// console.log(set1.has(50+50));// true
// console.log(set1.has({
//     name: 'John'
//}));// false--this has to do with the object is a reference value and not a primitive value so it is stored on the heap vs the stack...need to explore this later. 

//Delete from the set
set1.delete(100);
// console.log(set1.has(100));//now output=> false


//Iterate through sets-- sets are key/value pairs: they are just single values so you can use .values() or .entries() to access them  for(let item of set1.values())

for (let item of set1){
    console.log(item);
}


set1.forEach(item => {
    console.log(item);// A string
                        // {name: 'John}
                        // true
})

//CONVERT to an array
const setArr = Array.from(set1);
console.log(setArr);//(3) ["A string", {…}, true]