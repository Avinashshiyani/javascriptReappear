let lenghtOfSameNumber = (number = 889912) => {
  let digit = "8";
  let matchNumber = String(number).split("");
  let matchedNumber = matchNumber.filter((num) => num === digit);
  console.log(`The ${digit} that mathes the ${number} is ${matchedNumber.length} times`)
};

lenghtOfSameNumber(8988656532);
