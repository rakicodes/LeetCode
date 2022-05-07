/**
 * @param {number[]} heights
 * @return {number}
 */
 var heightChecker = function(heights) {
    const expected = heights.slice().sort((a,b) => a-b);
    return heights.filter((height,i) => height !== expected[i]).length;
};