// Create an object person with a method sayHello() that logs "Hi, I'm [name]". Call it normally and using call() with a different object.

let person = {
  name: "avinashTwo",
  sayHello: function () {
    console.log(`hi i'm ${this.name}`);
  },
};

const user = { name: "avinash" };

const sayHelloToUser = person.sayHello.bind(user);
 
sayHelloToUser()
