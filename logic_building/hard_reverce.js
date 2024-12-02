let reverce_hard = (string = "avinash") => {
  let reverceString = string.split("");
  for (let i = reverceString.length - 1; i >= 0; i--) {
    console.log(reverceString[i]);
  }
};

reverce_hard();
