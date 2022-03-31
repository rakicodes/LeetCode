/**
 * @param {number} n
 * @return {number}
 */
 var tribonacci = function(n) {
    if (cache[n] !== undefined) return cache[n];
    
    return cache[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
};

const cache = {
    0: 0,
    1: 1,
    2: 1
};