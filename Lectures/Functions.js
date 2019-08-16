// Functions: declarations, expressions, iffy, property methods
function greet(firstName = 'John', lastName = 'Jones') {
    // console.log('Hello');
    return `Hello ${firstName} ${lastName}`;
  }
  console.log(greet());
  console.log(greet('Jack', 'Smith'));
  
  //Function Expressions
  
  const square = function(x = 3) {
    return x * x;
  };
  console.log(square(5));
  
  //IIFe immediately invokable function expressions
  (function() {
    console.log('iife ran');
  })();
  // this format needs a trailing () bc it is a function call...so the first set of () houses the expression (nameless) and the second () calls it.
  //works well with modules and design patterns
  
  //Property methods (function inside of an object)
  const todo = {
    add: function(addtodo) {
      console.log(`${addtodo}`);
    },
    edit: function(id) {
      console.log(`Edit something about the todo ${id}`);
    }
  };
  
  todo.add('Buy Milk');
  todo.edit(22);
  