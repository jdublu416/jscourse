//Factory Pattern

//creates an interface for creating objects and then subclasses will decide what gets instantiated  ex: A member will have different types but will share the same properties

function MemberFactory() {
    this.createMember = (name, type) => {
      let member;
      if (type === 'simple') {
        member = new SimpleMembership(name);
      } else if (type === 'standard') {
        member = new StandardMembership(name);
      } else if (type === 'super') {
        member = new SuperMembership(name);
      }
  
      member.type = type;
  
      member.define = function() {
        console.log(`${this.name} (${this.type}: ${this.cost})`);
      };
      return member;
    };
  }
  function SimpleMembership(name) {
    this.name = name;
    this.cost = '$5';
  }
  function StandardMembership(name) {
    this.name = name;
    this.cost = '$15';
  }
  function SuperMembership(name) {
    this.name = name;
    this.cost = '$25';
  }
  
  const members = [];
  
  const factory = new MemberFactory();
  members.push(factory.createMember('John Doe', 'simple'));
  members.push(factory.createMember('Sally May', 'standard'));
  members.push(factory.createMember('Rick Watts', 'super'));
  members.push(factory.createMember('Chris Wicker', 'super'));
  console.log(members);
  
  members.forEach(function(member) {
    member.define();
  });
  //This a a good representation of a factory at work...the members share most properties except the type of membership, you would more than likely have other properties like age, email, phone, address, etc.