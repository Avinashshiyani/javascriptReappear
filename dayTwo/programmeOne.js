// Write a program that takes a light variable ("red", "yellow", or "green") and prints what the car should do.

let light = "yellow";

if (light == "red") {
  console.log("Cars Should Stop");
} else if (light == "yellow") {
  console.log("car should standby");
} else if (light == "green") {
  console.log("Car should move");
} else {
  console.log("Soory for wrong light");
}
