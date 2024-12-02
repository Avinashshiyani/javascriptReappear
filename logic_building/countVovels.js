let countVovels = (string = "Hello world") => {
  let getString = string.toLowerCase().split("");
  let vovels = ["a", "e", "i", "o", "u"];
  let len = getString.filter((char) => vovels.includes(char));
  console.log(len.length);
};

countVovels("HeLLoworldavinash");
