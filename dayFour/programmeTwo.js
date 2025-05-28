// 🔥 Challenge 2:
// Take an array [5, 10, 15, 20]

// Use map() to double each number

// Use filter() to keep numbers > 10

// Use reduce() to get the sum

const data = [5, 10, 15, 20];

console.log(data.map((i) => i * 2));

console.log(data.filter((i) => i < 10));

console.log(data.reduce((acc, i) => acc + i, 0));
