/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumbers = function(nums) {
    return nums.map(num => String(num)).filter(str => str.length % 2 === 0).length;
};