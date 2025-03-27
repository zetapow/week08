"use strict";

// Import module
import myModules from "./myModules.js";

// CommonJS import
// const myModules = require("./myModules");
// console.log(myModules);

console.log("Go go go");

function greet(name) {
   return `Hello ${name}! Welcome to Node!`;
}
const greeting = greet("Anna");

console.log(greet("Hank"));
console.log(greeting);
// greet("Mr. Anon");

const testSubtract = myModules.subtractNums(44, 22);
console.log("44 - 22 is ", testSubtract);

console.log("55 + 44 =", myModules.addNums(55, 44));
console.log('"hello" a number:', myModules.isNumber("hello"));
console.log('"11" a number:', myModules.isNumber("11"));
console.log("11 is a number", myModules.isNumber(11));
console.log("5 x 7 is", myModules.multipleNums(5, 7));
