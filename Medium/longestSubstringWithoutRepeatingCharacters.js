/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let aPointer = 0;
    let bPointer = 0;
    let maxSubstring = 0;
    
    let set = new Set();
    
    while (bPointer < s.length){
        if (!(set.has(s[bPointer]))) {
            set.add(s[bPointer]);
            bPointer++;
            maxSubstring = Math.max(maxSubstring, set.size);
        } else {
            set.delete(s[aPointer]);
            aPointer++;
        }
    }
    
    return maxSubstring;
    
};