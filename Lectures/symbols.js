//*** Symbols */ they are unique which makes them very powerful--object property identifiers

// create Symbol: primitive datatype (similar to const arr = Array()--do not need 'new' bc it is not an instance of something)

// const sym1 = Symbol();
// const sym2 = Symbol('sym2'); //creates a sym with an identifier

// console.log(sym1); // Symbol()
// console.log(sym2); // Symbol(sym2)
// console.log(typeof sym2); //symbol

    //*** No two symbols can be the same as another symbol

    //The main reason to create and use a symbol is for unique object keys
//***Unique Object Keys */
const KEY1 = Symbol();
const KEY2 = Symbol();

const myObj = {};

myObj[KEY1] = 'prop1';
myObj[KEY2] = 'prop2';
myObj.key3='prop3';
myObj.key4='prop4';


// console.log(myObj[KEY1]);
// console.log(myObj[KEY2]);

//**symbols are not enumerable in for...in */
// for(let i in myObj){
// console.log(`${i}: ${myObj[i]}`);
// } // key3: prop3, key4: prop4  it will not iterate through the KEYs

//***Symbols are ignored by json.stringify--which take js obj literal and turns into json string */
console.log(JSON.stringify({key: 'prop'})); //{"key":"prop"}
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'})); // {} --returns an empty obj bc it will not acknowledge the symbol