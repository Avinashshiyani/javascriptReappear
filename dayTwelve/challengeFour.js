// Create a function that takes a string and uses setInterval to print each character at 1-second intervals, then uses a callback to print “Done!” at the end.

let printString = (name = "avinash", callback) => {
  let stringName = name.split("");
  let index = 0;
  const intervalId = setInterval(() => {
    console.log(stringName[index]);
    index++;
    if (index === stringName.length) {
      clearInterval(intervalId); // Stop after printing all letters
      callback(); // Call the callback
    }
  }, 1000);
};

printString("avi", () => {
  console.log("Done!");
});
