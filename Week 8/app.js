// app.js

// Import the 'math' module from the './math.js' file.
// This line loads the module and makes its exported functions/variables available.
const math = require('./math');

// Call the 'add' function from the imported 'math' module, passing 5 and 3 as arguments.
console.log('Addition:', math.add(5, 3));

// Call the 'subtract' function from the imported 'math' module, passing 10 and 4 as arguments.
console.log('Subtraction:', math.subtract(10, 4));

// Destructuring example:
// Import the 'add' function specifically from the './math.js' module using object destructuring.
// This allows you to use the 'add' function directly without referencing the 'math' object.
const { add } = require('./math');

// Call the destructured 'add' function, passing 2 and 2 as arguments.
console.log("Add with destructuring:", add(2, 2));

// Single export example:
// Exports the 'multiply' function from this module ('app.js').
// This function can then be imported and used in other modules.
exports.multiply = function (a, b) {
    return a * b;
};