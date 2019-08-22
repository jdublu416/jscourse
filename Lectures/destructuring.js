//Destructuring Assignment

let a, b;

// Rest Pattern--
    //Array Destructuring
[a, b] = [100, 200];

console.log(a, b); //100 200
// Rest Pattern--this will assign the 'rest' of the values to a variable named rest
[a, b, ...rest] = [100, 200, 300, 400, 500];
console.log(rest); //[300,400,500]

[a, b, c, ...rest] = [100, 200, 300, 400, 500];
console.log(c); //300
console.log(rest);//[400,500] *************and so on***************

//can also do this with object
    //Object destructuring

({a, b} = {a:100, b:200, c:300, d:400, e:500});
console.log(a, b);// 100 200

({a, b, ...rest} = {a:100, b:200, c:300, d:400, e:500});
console.log(rest);//{c: 300, d: 400, e: 500}

/*******************Real life examples */
    //*Array Destructuring:**************
        // const people = ['John', 'Beth', 'Sally', 'Don'];
        // const [person1, person2, person3, person4] =people;
        // console.log(person1, person2, person3, person4);// John Beth Sally Don

        //Parse array returned from function
        // function getPeople(){
        //     return ['John', 'Beth', 'Sally', 'Don'];
        // }
        // let person1, person2, person3, person4;

        // [person1, person2, person3, person4] = getPeople();

    // console.log(person1, person2, person3, person4);//John Beth Sally Don
//************************************************************************** */

    //*Object Restructuring: much more useful than above***********************

const person = {
    name: 'John Doe',
    age:30,
    city: "Miami",
    gender: 'male',
    sayHello: () => console.log('Hello')
}
//ES5
// const name = person.name,
//       age=person.age,
//       city=person.city,
//       gender=person.gender;

//ES6 --allows you to not have to prepend your variables with the obj name to have access allowing cleaner easier to read code
const {name, age, city, gender, sayHello} = person;
console.log(name, age, city, gender);// John Doe 30 Miami male
sayHello();

 




