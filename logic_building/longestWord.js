let longestWord = (sentence = "The box a helloworld brother synergy") => {
  let spliting = sentence.split(" ");
  let count = spliting.map((e) => e.length);
  let findLargest = Math.max(...count);
  console.log(findLargest);
};

longestWord();
