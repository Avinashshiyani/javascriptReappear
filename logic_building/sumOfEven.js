let sumOfEven = (number = 235689) => {
  let allNumber = String(number).split("");
  let evenNumber = allNumber.filter((e) => e % 2 == 0);
  let convert = evenNumber.map((e) => Number(e));
  let plusEvenNumber = convert.reduce((acc, crr) => acc + crr);
  console.log(plusEvenNumber);
};

sumOfEven(123456);
