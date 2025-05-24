let age = 14;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Allowed");
}

if (age < 18 || !hasID) {
  console.log("Not Allowed");
}
