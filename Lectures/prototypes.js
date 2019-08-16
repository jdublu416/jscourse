//PROTOTYPES each object in js has a prototype, which is an object itself. all objects inherit their properties and methods from their prototype. Object literals inherit from Object.prototype

function Person(firstName, lastName,  dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = function() {
    //   const diff = Date.now() - this.birthday.getTime();
    //   const ageDate = new Date(diff);
    //   return Math.abs(ageDate.getUTCFullYear() - 1970);
    // };
  }
  
  const john = new Person('John', 'Doe', '08-12-1987');
  const mary = new Person('Mary', 'Smith', '07-22-1985');
  
  console.log(mary);
  
  //all this information is stored in Persons prototype. This information will be different for each Person except for the calculate age function. It will be the same for each person so you should store it in the prototype and not directly in the object
  
  //calculate age
  Person.prototype.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
  
  // get full name
  Person.prototype.getFullName= function(){
    return `${this.firstName} ${this.lastName}`
  }
  
  // This moves the actual function in the prototype vs in the object
  
  console.log(john.calculateAge());
  console.log(mary.getFullName());
  
  // This enables us to not bog down the constructor and stores the functions one time instead of many times
  
  //Manipulate the data with prototypes
  Person.prototype.getsMarried = function (newLastName){
    this.lastName = newLastName;
  }
  console.log(mary.getFullName());
  mary.getsMarried('Doe');
  console.log(mary.getFullName()); //This also allows the function to be used for everyone over and over without bogging down the constructor. cool.