var deleteAndEarn = function(nums) {
    
    let map = new Map();
    for (let i=0; i<nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i])+1)
        } else {
            map.set(nums[i], 1);
        }
    }
    
    nums = [...new Set(nums)].sort((a,b)=>a-b);

    let earn1 = 0;
    let earn2 = 0;
    for (let i=0; i<nums.length; i++) {
        let curr = nums[i] * map.get(nums[i]);
        if (i>0 && nums[i]===nums[i-1]+1) {
            let temp = earn2;
            earn2 = Math.max(curr+earn1, earn2)
            earn1 = temp;
        } else {
            let temp = earn2;
            earn2 = curr+earn2;
            earn1 = temp;
        }
    }
    
    return earn2;
};