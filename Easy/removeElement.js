/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let i=0;
    while (nums.includes(val)) {
        if (val===nums[i]) {
            nums.splice(i,1);
        } else {
            i++;
        }
    }
    
    return nums.length;
};