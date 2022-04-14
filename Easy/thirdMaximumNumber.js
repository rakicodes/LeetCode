var thirdMax = function(nums) {
    let set = new Set();
    
    for (let i=0; i<nums.length; i++) {
        set.add(nums[i]);
        
        if (set.size > 3) {
            set.delete(Math.min(...set));
        }
    }
    return set.size < 3 ? Math.max(...set) : Math.min(...set);
};