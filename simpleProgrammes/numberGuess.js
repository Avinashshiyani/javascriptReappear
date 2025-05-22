let randomNumber = parseInt(Math.random() * 100);
console.log(randomNumber);
for (i = 0; i <= 100; i++) {
  let mauka = 100 - i;
  let guessNumber = parseInt(prompt("Enter NUmber"));
  if (guessNumber === randomNumber) {
    console.log("You Guessed Right");
    break;
  } else if (guessNumber > randomNumber) {
    console.log("You are higher From That");
  } else {
    console.log("You are lower from that");
  }
  console.log("R Turn", mauka, "number=", randomNumber);
}
// console.log(mauka);
