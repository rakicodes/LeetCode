/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    if (nums.length===1) return nums[0];
    if (nums.length===2) return Math.max(nums[0], nums[1]);
    if (nums.length===3) return Math.max(nums[0], Math.max(nums[1],nums[2]))
    
    const firstHouse = robHelper(0, nums.length-2, nums);
    const secondHouse = robHelper(1,nums.length-1, nums);
    
    return Math.max(firstHouse, secondHouse);
   
};

var robHelper = function(start, end, nums) {
    let dp = [];
    dp[0] = nums[start];
    dp[1] = Math.max(nums[start], nums[start+1]);
    for (let i=2; i<=end; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2]+nums[start+i])
    }
    return dp[end-start]
}