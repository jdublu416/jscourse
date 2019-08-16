class Person {
    constructor(firstName, lastName, dob) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthday = new Date(dob);
    }
    greeting() {
      return `Hello, Welcome ${this.firstName} ${this.lastName}!`;
    }
  
    calculateAge () {
      const diff = Date.now()- this.birthday.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() -1970)
    }
    getsMarried (newLastName) {
      this.lastName = newLastName;
    }
  
    static addNumbers(x, y) {//when you add a method that does not belong to an instance of that class, you add the static modifier.  the function would be called on the class and not the instance. ex: Person.addNumbers(1,2)
      //It belongs to the Person constructor within the object and not the prototype or properties
      return x+y
    }
  }
  
  const mary = new Person('Mary', 'Williams', '11-13-1980');
  
  console.log(mary.greeting());
  console.log(mary.calculateAge());
  mary.getsMarried('Smith');
  console.log(mary);
  