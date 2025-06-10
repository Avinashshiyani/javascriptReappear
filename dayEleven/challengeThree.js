// Use setInterval() to print “Tick tock” every 2 seconds.

function ticktick() {
  let tickTockCount = 0;
  setInterval(() => {
    tickTockCount++;
    console.log(`Tick Tock ${tickTockCount}`);
  }, 2000);
}

ticktick();
