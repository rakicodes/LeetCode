/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
    return nums.sort( (a,b) => {
        if (a % 2 === 0 && b % 2 === 1) {
            return -1;
        } else if (a % 2 === 1 && b % 2 === 0){
            return 1;
        } else {
            return 0;
        }
    })
};