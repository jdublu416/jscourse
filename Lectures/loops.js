// FOr Loop

// for(let i = 0; i < 10; i++) {
//     if (i===2){
//         console.log('2 is my favorite number');
//         continue;
//     }
//     if(i===5){
//         break
//     }
//     console.log('Number ' + i);
// }

//While loop 

// let i = 0;

// while(i <10){
//     console.log('Number ' + i);
//     i++;
// }

//Do while will run at least once...
let i = 20;

do {
    console.log('Number ' + i);
    i++;
}

while (i < 10);


// Loop through an array
const cars=  ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for( let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }

//use forEach is better to use for array looping, it does not change the array.
cars.forEach(car => {
    console.log(car);
})

//Map will do something to the array and return a whole new array

const users = [{id: 1, name: 'John'}, {id:2, name: 'Sara'}, {id: 3, name: 'Brad'}]

const ids = users.map( user => {
    // console.log('User id ' + user.id);
    return user.id
})

const user = {
    firstName : 'John',
    lastName: 'Doe',
    age: 40
}

// For in loop

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}