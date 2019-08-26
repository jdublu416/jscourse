//Mediator Pattern: behavioral pattern that has interface that communicates with collegues Used for chat room. The Chatroom is the mediator and the users are the collegues.

//The user is the collegues of the mediator
const User = function(name) {
    this.name = name;
    this.chatroom = null;
  };
  
  User.prototype = {
    send: function(message, to) {
      this.chatroom.send(message, this, to);
    },
    receive: function(message, from) {
      console.log(`${from.name} to ${this.name}: ${message}`);
    }
  };
  //Mediator for the users
  const Chatroom = function() {
    let users = {}; //list of Users
    return {
      register: function (user){
        users[user.name] = user;
        user.chatroom = this;
      },
      send: function(message, from, to){
        if (to) {
          //Single user message
          to.receive(message, from);
        } else {
          //Mass message
          for(key in users){
            if (users[key] !== from) {
              users[key].receive(message, from);
            }
          }
        }
      },
    }
  };
  const brad = new User('Brad')
  const jeff= new User('Jeff')
  const sara = new User('Sara')
  
  const chatroom = new Chatroom();
  chatroom.register(brad);
  chatroom.register(jeff);
  chatroom.register(sara);
  
  brad.send('Hello Jeff!', jeff); //specific brad to jeff
  sara.send('Hello Brad!, You are the best dev ever!', brad);//specific sara to Brad
  jeff.send('Hello!!!!'); //specific jeff to all
  
  
  