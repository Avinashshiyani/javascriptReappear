// Create a higher-order function that takes two numbers and a callback function for an operation (like add, multiply), and returns the result.

function matchTheFlow(numOne, numTwo, operation) {
  return operation(numOne, numTwo);
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

console.log(matchTheFlow(2, 3, multiply));
