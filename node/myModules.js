function addNums(num1, num2) {
   return num1 + num2;
}

function subtractNums(num1, num2) {
   return num1 - num2;
}

const isNumber = (num) => {
   return !isNaN(parseInt(num));
};

module.exports = { addNums, subtractNums, isNumber };
