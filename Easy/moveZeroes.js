/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * examples [0,1,0,3,12] => [1,3,12,0,0]
 *          [0,0,1] => [1,0,0]
 *          [0] => [0]
 * pseudocode
 * - go through each element in the array while the array contains a zero
 * - if current element is a zero, remove zero and increment counter
 * - else, increase index
 * - add 0s to the end of the array
 */
 var moveZeroes = function(nums) {
    let i=0;
    let counter=0;
    while (nums.includes(0)) {
        if (nums[i] === 0) {
            nums.splice(i,1);
            counter++;
        } else {
            i++;
        }
    }
    for (let i=0; i<counter; i++) {
        nums.push(0);
    }
    
};
