/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 let rotate = function(nums, k) {
    k %= nums.length;
    
    // ex. [1,2,3,4,5] 2
    reverse(nums, 0, nums.length-1); // [5,4,3,2,1]
    reverse(nums, 0, k-1); // [4,5,3,2,1]
    reverse(nums, k, nums.length-1) // [4,5,1,2,3]
    
};

let reverse = function(nums, start, end) {
    while (start<end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}