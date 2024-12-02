let removeDuplicate = (string = "hello world") => {
  let result = ""; // String to store characters without duplicates
  for (let i = 0; i < string.length; i++) {
    if (!result.includes(string[i])) {
      // If character isn't in result, add it
      result += string[i];
    }
  }
  console.log(result); // Output the string without duplicates
};

removeDuplicate();
