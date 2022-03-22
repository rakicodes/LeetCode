/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
    let maxOnes = 0;
    let count = 0;
    for (let num of nums) {
        if (num===0) {
            count = 0;
        } else {
            count++;
        }
        maxOnes = Math.max(maxOnes, count);
    }
    return maxOnes;
};