/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    
    let maxContPro = nums[0];
    let minContPro = nums[0];
    let maxPro = nums[0];
    
    for (let i=1; i<nums.length; i++) {
        let temp = Math.max(Math.max(maxContPro*nums[i], minContPro*nums[i]), nums[i]);
        minContPro = Math.min(Math.min(minContPro*nums[i], maxContPro*nums[i]), nums[i]);
        
        maxContPro = temp;
        maxPro = Math.max(maxPro, maxContPro);
    }
    
    return maxPro;
};