let con = true;
while (con) {
  let userAge = prompt("Enter Age to check availability for licence");

  let filterAge = parseInt(userAge);
  if (filterAge < 18) {
    alert("You cant Drive");
  } else if (filterAge > 68) {
    alert("Stay at Home");
  } else {
    alert("Congratulations You can Drive");
  }
  con = confirm("Want to Enter Again");
}
