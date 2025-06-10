// Write a function greetUser(name, callback) that prints “Hello, [name]!” and then calls the callback function which prints “Have a great day!”

function greetUser(name, callback) {
  console.log(`hello ${name}`);
  callback();
}

function greet() {
  console.log("have a nice day ");
}

greetUser("avinash", greet);
