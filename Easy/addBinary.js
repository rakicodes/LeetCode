/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    let x = BigInt("0b" + a);
    let y = BigInt("0b" + b);
    let sum;
    let carry;
    while (y) {
        sum = x ^ y;
        carry = (x & y) << BigInt("0b1"); 
        x = sum;
        y = carry;
    }
    return x.toString(2);
};