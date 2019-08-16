// Prototypal Inheritance

function Person (firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  Person.prototype.greeting = function (){
    return `Hello there ${this.firstName} ${this.lastName}`
  }
  
  const person = new Person('John', 'Doe')
  
  console.log(person.greeting());
  
  function Customer (firstName, lastName, phone, membership) {
   Person.call(this, firstName, lastName);
   this.phone = phone;
   this.membership = membership
  }
  // Inherit the person prototype methods-basically transferring the prototype methods or extending. These two lines of code gives access to the prototypes for Person to Customer and then assigns the prototype constructor to Person?
  Customer.prototype = Object.create(Person.prototype);
  Customer.prototype.constructor = Customer;
  
  const customer = new Customer('Tom', 'Smith', '999-111-2222', 'Standard')
  
  Customer.prototype.greeting = function (){
    return `Hello there ${this.firstName} ${this.lastName}! Welcome to the company!`
  }
  
  console.log(customer);
  console.log(customer.greeting());