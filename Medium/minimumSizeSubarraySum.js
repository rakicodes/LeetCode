S/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0;
    let minLen = Infinity;
    let sum = 0;
    
    for (let i=0; i<nums.length; i++) {
        sum += nums[i];
        
        while (sum >= target) {
            minLen = Math.min(minLen, i+1-left);
            sum -= nums[left];
            left++;
        }
    }
    
    return minLen === Infinity ? 0 : minLen;
};