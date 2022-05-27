var findMaxConsecutiveOnes = function(nums) {
    let maxOnes = 0;
    let left = 0;
    let right = 0;
    let numZeroes = 0;
    
    while (right < nums.length) {
        if (nums[right] === 0) {
            numZeroes++;
        }
        
        while (numZeroes === 2) {
            if (nums[left] === 0) {
                numZeroes--;
            }
            left++;
        }
        
        maxOnes = Math.max(maxOnes, right-left+1);
        right++;
    }
    
    return maxOnes;
};