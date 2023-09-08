const palindromes = function (str) {
    let newStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    let arr = newStr.split("");
    
    return arr.reverse().join("") === newStr;
};

console.log(palindromes('r3ace3car'))

// Do not edit below this line
module.exports = palindromes;
