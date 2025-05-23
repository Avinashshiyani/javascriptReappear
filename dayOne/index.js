// 1. var vs let vs const
var a = 10;
let b = 20;
const c = 30;

a = 15;
b = 25;
// c = 35; // ❌ Error

console.log(a, b, c);

// 2. Primitive vs Non-Primitive
let str = "Hello";  // primitive
let obj = { name: "Avinash" };  // non-primitive

let obj2 = obj;
obj2.name = "Coder";
console.log(obj.name); // "Coder"

// 3. Type Coercion
console.log("5" + 1);       // "51"
console.log("5" - 1);       // 4
console.log(true + false);  // 1
console.log(null + 1);      // 1
console.log(undefined + 1); // NaN

// 4. Explicit Coercion
console.log(Number("123")); // 123
console.log(Boolean(0));    // false
console.log(String(100));   // "100"


