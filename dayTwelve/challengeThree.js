// 👉 Write an async function that waits for a Promise that resolves after 2 seconds and logs “Data processed!” when done.

async function wait() {
  const message = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Processed!");
    }, 2000);
  });
  console.log(message);
}

wait();
