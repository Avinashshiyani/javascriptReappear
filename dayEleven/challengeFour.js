// Use setTimeout() to print each letter of a string one by one at 1-second intervals.

function printEachLetter(name = "avinash") {
  let seperateLetters = name.split("");
  for (let i = 0; i <= seperateLetters.length - 1; i++) {
    setTimeout(() => {
      console.log(`${seperateLetters[i]}`);
    }, i * 1000);
  }
}

printEachLetter();
