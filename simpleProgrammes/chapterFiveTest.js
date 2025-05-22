// let userInput = parseInt(prompt("Enter Value"));
// let arraySimple = [10, 20, 30, 40];

// arraySimple.push(userInput);
// console.log(arraySimple);

// problem statement 2
// let arraySimple = [10, 20, 30, 40];
// let a;
// do {
//   a = parseInt(prompt("Enter Value"));
//   arraySimple.push(a);
// } while (a != 0);

// problem statement 3
// let arraySimple = [10, 21, 30, 40];
// let divByTen = arraySimple.filter((e) => {
//   return e % 10 == 0;
// });
// console.log(divByTen);

// problem statement 3
let arraySimple = [10, 21, 30, 40];

let squareArray = arraySimple.map((e) => {
  return e * e;
});

console.log(squareArray);
