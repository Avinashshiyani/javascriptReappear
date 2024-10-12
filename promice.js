let promice = new Promise((resolve, reject) => {
//   alert("Hello worlclgd");
    // resolve("Hello world")
});

promice.then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});

console.log(promice)
