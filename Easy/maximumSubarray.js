/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let maxSum = -Infinity;
    let sum = 0;
    for (let num of nums) {
        if (num > sum+num) {
            sum = num;
        } else {
            sum += num;
        }
        maxSum = Math.max(maxSum, sum);   
        
        
    }
    
    return maxSum;
};