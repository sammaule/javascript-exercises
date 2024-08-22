const palindromes = function (str) {
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
