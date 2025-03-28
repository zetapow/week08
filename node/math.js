const add = (x, y) => x + y;

const square = (x) => x * x;

const PI = 3.14159;

const math = {
   add: add,
   square: square,
   PI: PI,
};

module.exports = { add, square, PI };
module.exports = math;
// module.exports.add = add;
// module.exports.square = square;
// module.exports.PI = PI;
