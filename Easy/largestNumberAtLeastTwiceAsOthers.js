/**
 * @param {number[]} nums
 * @return {number}
 */
 var dominantIndex = function(nums) {
    const largest = Math.max(...nums);
    const copy = nums.slice()
    copy.splice(nums.indexOf(largest),1);
    return copy.every(num => num*2 <= largest) ?  nums.indexOf(largest) : -1;
};