// Write a Promise that resolves after 3 seconds with the message “Data loaded!” and prints it using .then().

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data Loaded");
  }, 3000);
}).then((message) => {
  console.log(message);
});
