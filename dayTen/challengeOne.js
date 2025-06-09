// Write a closure function that keeps track of how many times it’s been called.

function closure() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

let increment = closure();

increment();
increment();
