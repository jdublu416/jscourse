// Built in Constructors
/*
Not often used but worth mentioning:
Strings-this can be done as on line 11. One can that add properties to name2. This can cause issues with typing whether you use '==' or '==='
Numbers- same as the string object, it will create an object that has the primitiveValue as a key:value pair. 
Boolean- returns an object with value of {true}
Functions-line 27: looks odd but no real reason to do this
Objects-no difference in how you instantiate the object, the output is same.
arrays-out put same
regexp- have to escape when you use regExp()...


These methods are not necessary to use, they will slow down your program

*/

const name1 = 'Jeff'; //String
const name2 = new String('Jeff'); //Object
console.log(name2[2]); // will return 'f'

const num1 = 5; // 5
const num2 = new Number(5); // returns [[PrimitiveValue]] : 5
const bool2 = new Boolean(true);

console.log(bool2);

const getSum = function(x, y) {
  return x + y;
};

const getSum2 = new Function('x', 'y', 'return 1+1');
console.log(getSum(1,1))
// objects
const john = {
  name: 'John'
}

const john2 = new Object({name: 'John'});
console.log(john2);

// REg expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');
console.log(re2);
