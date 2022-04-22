/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    let arr = [];
    for (let i=0; i<nums.length; i++) {
        if (nums[Math.abs(nums[i])-1] > 0) {
            nums[Math.abs(nums[i])-1] *= -1;
        }
    }
    
    for (let i=0; i<nums.length; i++) {
        if (nums[i] > 0) {
            arr.push(i+1);
        }
    }
    
    return arr;
};