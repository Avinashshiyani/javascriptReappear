let uniqueNumber = (check = "hello") => {
  let word = check.split("");
  let checkWord = word.reduce((a, d) => (a = d));
  console.log(checkWord);
};

uniqueNumber();
