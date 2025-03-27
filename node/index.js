const myModules = require("./myModules");
console.log(myModules);

console.log("Go go go");

function greet(name) {
   console.log(`Hello ${name}! Welcome to Node!`);
}

greet("Mr. Anon");

const testSubtract = myModules.subtractNums(44, 22);
console.log("44 - 22 is ", testSubtract);

console.log(myModules.addNums(55, 44));
console.log(myModules.isNumber("hello"));
console.log(myModules.isNumber("11"));
console.log(myModules.isNumber(11));
