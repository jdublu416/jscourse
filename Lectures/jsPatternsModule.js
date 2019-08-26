//Module Pattern --es6 introduces modules...so this is from es5

//Basic stx:
    // (function() {
    //   //declare private var and fxs here
    //   return {
    //     //declare public vars and fxs
    //   };
    // })();
    //it is an iife so you start with the parentheses and have an anon fx inside of it,
    //the trailing parentheses calls the nameless fx.

//Standard module pattern --we only have access to the return object...the preceding code is private.
    // const UICtrl = (function(){
    //     let text = 'Hello World';

    //     let changeText = () => {
    //         const element = document.querySelector('h1');
    //         element.textContent = text;
    //     }
    //     return {
    //         callChangeText : () => {
    //             changeText();
    //             console.log(text);
    //         }
    //     }
    // })();

    // UICtrl.callChangeText();
    // UICtrl.changeText(); //logs an error that changeText is not a function (TypeError)

//Revealing Module Pattern

const ItemCtrl = (() => {
    let _data = [];
    add = item => {
      _data.push(item);
      console.log('Item Added');
    };
    get = id => {
      return _data.find(item => {
        return item.id === id;
      });
    };
    return {
      add: add,
      get: get //if you dont "reveal" the object in the return, you will not have access to the methods within the controller.  This is the difference between these two patterns(access)
    };
  })();
  
  ItemCtrl.add({ id: 1, name: 'John' });
  ItemCtrl.add({ id: 2, name: 'Sara' });
  console.log(ItemCtrl.get(1));
  console.log(ItemCtrl.get(2));
  
  //*****The Module pattern creates variables and methods that are strictly protected and methods and variables are created in the return to have access to the private info */
  
  //*******In the module revealing pattern the private info is able to be accessed indirectly by reference(?) ONe is able to use the private functions and variables indirectly while the methods are protected from directly changing them */