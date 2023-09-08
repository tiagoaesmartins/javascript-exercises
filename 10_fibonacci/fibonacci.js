const fibonacci = function(num) {

    if(num < 0) {
        return "OOPS";
    };

    if(num === 0) {
        return 0;
    };

    let firstToSum = 1;
    let secondToSum = 0; 
    for(let i = 2; i <= num; i++) {
        let newValue = firstToSum + secondToSum;
        secondToSum = firstToSum;
        firstToSum = newValue;
    };

    return firstToSum;
};

console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
