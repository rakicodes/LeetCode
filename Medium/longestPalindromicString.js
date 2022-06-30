/**
 * @param {string} s
 * @return {string}
 */
 function longestPalindrome(s) {
    let ll = 0, rr = 0;
    
    for (let i = 0; i < s.length; i++) // go through the string
      for (let j of [i, i+1]) // i checks for odd palindrome, i+1 checks for even palindrome
        for (l = i, r = j; s[l] && s[l] === s[r]; l--, r++) 
          [ll, rr] = (r-l+1) > (rr-ll+1) ? [l, r] : [ll, rr]; // if palindrome length is greater than saved index change index to curr index
          
    return s.substring(ll, rr+1);
  }