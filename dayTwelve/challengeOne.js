// 👉 Write a function that takes a callback and uses setTimeout to simulate fetching data after 2 seconds, then calls the callback with the data

function fetchData(callback) {
  setTimeout(() => {
    console.log("Fetching the data");
    callback();
  }, 2000);
}

fetchData(() => {
  console.log("Okay bro data fetched after 2 seconds");
});
