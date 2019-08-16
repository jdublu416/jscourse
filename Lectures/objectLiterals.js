//Object literals

const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function(){
        return 2019 - this.age
    }
}

let val;

val = person
val = person.firstName;
val = person['firstName']
val = person.lastName
val= person.age
val = person.hobbies
val = person.hobbies[1]
val = person.address
val = person.address['city'] //or
val = person.address.city
val = person.getBirthYear()

console.log(val);

const people = [
    {
        name: "John",
        age: 30
    },
    {
        name: "Mike",
        age: 35
    },
    {
        name: "Sally",
        age: 22
    }
]
// one can iterate through each item
for(let i = 0; i < people.length; i++) {
    console.log(people[i].name);
}