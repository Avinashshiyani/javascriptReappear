// 🧩 Challenge 3 (Strings)
// Write a function that takes a string and counts the number of vowels in it.

let checkVovels = (word = "hello my name is avinash") => {
  //   let vowels = ["a", "e", "i", "o", "u"];
  let string = word.split("");
  let totalVovel = [];
  for (let i = 0; i <= word.length; i++) {
    if (string[i] == "a" && "e" && "i" && "o" && "u") {
        totalVovel.push(string[i]);
    }
}
console.log(totalVovel);
};

checkVovels();
