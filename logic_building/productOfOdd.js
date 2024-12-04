let productOdd = (number = []) => {
  let allNumber = String(number).split(",");
  let getOddNumber = allNumber.filter((e) => e % 2 == 1);
  let makeInteger = getOddNumber
    .map((e) => Number(e))
    .reduce((acc, crr) => acc * crr || 0);
  console.log(makeInteger);
};

productOdd([2, 4, 6]);
