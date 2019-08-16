// OBJECT LITERAL
const brad = {
    name: 'Brad',
    age: 30
  };
  
  //Person constructor
  
  function Person(name, dob) {
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function() {
      const diff = Date.now() - this.birthday.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
  }
  
  console.log('Outside: ' + this); //this refers to the window object
  
  //Instantiate each instance of Person.
  const ann = new Person('Ann', 26);
  const john = new Person('John', 42, '12-07-1971');
  const chad = new Person('Chad', 30);
  const emily = new Person('Emily', '06-27-1988');
  
  // console.log(ann, chad, john);
  // console.log(john.birthday);
  console.log(emily.calculateAge());
  