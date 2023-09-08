const add = function(num1, num2) {
	return num1 + num2;
};


const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(...args) {

	return args.flat().reduce((sum, current) => sum + current, 0);

};


const multiply = function(...args) {
  
  return args.flat().reduce((sum, current) => sum * current, 1);

};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
	const numbers = [];

  if(num === 0 || num === 1) {
    return 1;
  }

  for(let i = 1; i <= num; i++) {
    numbers.push(i);
  };

  const factorializeThis = numbers.reduce((multiplicator, current) => multiplicator * current, 1);

  return factorializeThis;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
