let sumOfDigit = (number = 123) => {
  let addnumber = Array.from(String(number), Number);
  let getAnswer = addnumber.reduce((acc, crr) => acc + crr);
  console.log(getAnswer);
};

sumOfDigit(555);
