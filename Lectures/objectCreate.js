//Alternate way to create objects using Object.create with es5 

const personPrototypes = {
    greeting: function() {
      return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function (newLastName) {
      this.lastName = newLastName;
    }
  };
  
  const mary = Object.create(personPrototypes);
  mary.firstName = 'Mary';
  mary.lastName = 'Williams';
  
  mary.age = 30;
  console.log(mary.getsMarried('Jones'));
  console.log(mary.greeting());
  
  const brad = Object.create(personPrototypes, {
    firstName:{ value:'Brad'},
    lastName: {value: 'Traversy'},
    age: {value: 36}
  });
  
  console.log(brad.greeting());