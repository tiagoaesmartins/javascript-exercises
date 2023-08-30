const removeFromArray = function(arr, ...args) {
    return arr.filter(function (notArgs) {
        return !args.includes(notArgs);
    });
};

console.log(removeFromArray([1, 2, 3, 4], 3, 2))

// Do not edit below this line
module.exports = removeFromArray;
