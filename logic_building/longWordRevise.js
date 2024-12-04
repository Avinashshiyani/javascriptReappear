let longestWord = (word = "i am javascript hellowordshdgs local") => {
  let wordCount = word.split(" ");
  let l = "";
  for (i = 0; i <= wordCount.length - 1; i++) {
    let a = wordCount[i].length;
    if (a > l.length) {
      l = wordCount[i];
    }
  }
  console.log(l.length)
};

longestWord();
