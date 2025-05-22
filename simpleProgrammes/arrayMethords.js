let marks = [98, 15, 36, 58, 9, 23, 7];
let name = ["avinash"];
let b = marks.toString();
let join = marks.join(0);
console.log(typeof join);

let pop = marks.pop(marks);
let push = marks.push(8, 9);

let swift = marks.shift();

let unshift = marks.unshift("Hello");

let del = delete marks[1] && delete marks[2];

let concate = marks.concat(name);
let compareNum = (a, b) => {
  return a - b;
};
let sort = marks.sort(compareNum);

let reverce = marks.reverse();
let spliceArr = marks.splice(1, 5, 1, 2);

let sliceArr = marks.slice(0, 2);
console.log(sliceArr);
