let elements = ["snake", "water", "gun"];

let randomNumber = Math.round(Math.random() * 2);

let computerRandomGuess = () => {
  return elements[randomNumber];
};

const computerAnswer = computerRandomGuess();

let userAnswer = prompt("Snake Water Gun ?");

if (userAnswer === computerAnswer) {
  console.log("Same Same but Different! It's a tie.");
} else if (userAnswer === "snake" && computerAnswer === "gun") {
  console.log(
    `You lose! The computer chose ${computerAnswer}, as gun kills snake.`
  );
} else if (userAnswer === "gun" && computerAnswer === "water") {
  console.log(
    `You lose! The computer chose ${computerAnswer}, as water drowns gun.`
  );
} else if (userAnswer === "water" && computerAnswer === "snake") {
  console.log(
    `You lose! The computer chose ${computerAnswer}, as snake drinks water.`
  );
} else if (userAnswer === "gun" && computerAnswer === "snake") {
  console.log(`You win! Your gun kills the computer's snake.`);
} else if (userAnswer === "water" && computerAnswer === "gun") {
  console.log(`You win! Your water drowns the computer's gun.`);
} else if (userAnswer === "snake" && computerAnswer === "water") {
  console.log(`You win! Your snake drinks the computer's water.`);
} else {
  console.log("Invalid input. Please choose snake, water, or gun.");
}
