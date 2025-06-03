// Challenge 1 — Object Method
// ✅ Create an object called car with:

// properties: brand, model, year

// a method called start() that prints:
// "The [brand] [model] is starting!"

let car = {
  brand: "AUDI",
  model: "R8",
  year: 2003,
  start: function () {
    console.log(`The ${this.brand} ${car.model} is starting`);
  },
};

car.start();
