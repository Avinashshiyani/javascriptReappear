// Use apply() to find the maximum value in an array:

const numbers = [1, 5, 8, 3];

let highestNumber = (number) => {
  let max = [0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max.push(numbers[i]);
      console.log(max);
    }
  }
};

highestNumber.apply()