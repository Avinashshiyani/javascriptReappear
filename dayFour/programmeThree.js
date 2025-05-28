// 🔥 Challenge 3 (Mini-Project):
// Given an array of student marks [55, 72, 89, 45, 38, 90]

// Filter only passing marks (>=50)

// Get the average of passing marks using reduce()

let marks = [55, 72, 89, 45, 38, 90];

console.log(marks.filter((marks) => marks >= 50));

console.log(marks.reduce((acc, marks) => acc / marks, 0));
