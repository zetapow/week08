"use strict";

function addNums(num1, num2) {
   return num1 + num2;
}

function subtractNums(num1, num2) {
   return num1 - num2;
}

const isNumber = (num) => {
   return !isNaN(parseInt(num));
};

const multipleNums = (num1, num2) => {
   return num1 * num2;
};

// module.exports = { addNums, subtractNums, isNumber, multipleNums };
export default { addNums, subtractNums, isNumber, multipleNums };
// console.log(module);
