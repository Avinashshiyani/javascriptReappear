let spaceCount = (string = "hello world how are you") => {
  let spaceThings = string.split(" ");
  let totalSpace = spaceThings.length - 1;
  console.log(totalSpace);
};

spaceCount();
