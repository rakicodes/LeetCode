/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
    let ans = 0;
    
    for (let i = 0; i < s.length; i++) {
        // odd palindromes
        let left = i;
        let right = i;
        ans += numOfPalindromes(s,left,right)
        
        // even palindromes
        left = i;
        right = i+1;
        ans += numOfPalindromes(s,left,right)
    }
    
    return ans;
};

const numOfPalindromes = function(s,left,right) {
    let num=0;
    while (left >=0 && right<s.length && s[left]===s[right]) {
            num++;
            left--;
            right++;
    }
    
    return num;
}