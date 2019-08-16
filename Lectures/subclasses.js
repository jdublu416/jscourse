//Subclasses...ES6 class inheritance. extends a class

class Person {
    constructor(firstName, lastName){
      this.firstName = firstName
      this.lastName = lastName
    }
  
    greeting (){
      return `Hello there ${this.firstName} ${this.lastName}`
    }
  }
  //subclass of person- we are creating customer that forks off Person class
  //this means all properties and methods from Person are available to the Customer class
  class Customer extends Person {
    constructor(firstName, lastName, phone, membership){
      super(firstName, lastName); //have to call in the properties that you need from the parent class as parameters for the super class. Then as with a regular class, you need to define the other properties
      this.phone = phone;
      this.membership = membership;
    }
  
    static getMembershipCost (){
      return 500;
    }
  }
  
  const john = new Customer('John', 'Doe', '999-555-1111', 'Standard');
  console.log(john.greeting());
  console.log(Customer.getMembershipCost());// Again, a static method is called on the class that contains it and not the instance of the class. The flow of info is one way, you can not call or use properties with Person class ex: calling Person.getMembershipCost will fail!