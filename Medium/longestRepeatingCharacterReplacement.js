/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function(s, k) {
    let count = new Array(26).fill(0);
    let maxFreq = 0;
    let longest = 0;
    let left = 0;
    let right = 0;
    
    while (right < s.length) {
        count[s.charCodeAt(right)-65]++;
        
        let windowLen = right-left+1;
        maxFreq = Math.max(maxFreq, count[s.charCodeAt(right)-65]);
        
        if (windowLen - maxFreq > k) {
            count[s.charCodeAt(left)-65]--;
            left++;
            windowLen = right-left+1;
        }
        
        
        longest = Math.max(longest, windowLen)
        right++;
        
        
    }
    
    
    return longest;
};
