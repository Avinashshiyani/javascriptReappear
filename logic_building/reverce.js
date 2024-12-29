let reverceNumber = (number = 123456) => {
  let initialNumber = String(number);
  let reverceNumber = initialNumber.split("").reverse().join("");
  let convertTonumber = Number(reverceNumber);
  console.log(convertTonumber)
};

reverceNumber();
