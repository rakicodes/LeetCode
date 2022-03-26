/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let digitsPlusOne = BigInt(digits.join(""))+BigInt(1);
    
    return String(digitsPlusOne).split("");
    
};