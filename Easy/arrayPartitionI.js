/**
 * @param {number[]} nums
 * @return {number}
 */
 var arrayPairSum = function(nums) {
    return nums.sort((a,b) => a-b).filter((x,i) => i % 2 === 0).reduce((acc,c) => acc+c,0)
};