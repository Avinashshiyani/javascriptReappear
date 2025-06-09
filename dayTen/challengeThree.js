// Write a function that simulates an asynchronous operation using setTimeout and calls a callback when done.

function fetchData(callback) {
  return setTimeout(() => {
    callback("Data Loaded");
  }, 1000);
}

fetchData((message)=>{
     console.log(message)
})


