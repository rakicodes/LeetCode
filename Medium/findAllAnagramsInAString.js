/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
    if (s.length<p.length) return [];
    
    let sCount = new Array(26).fill(0);
    let pCount = new Array(26).fill(0);
    
    for (let char of p) {
        pCount[char.charCodeAt(0)-97]++;
    }
    
    let res = [];
    for (let i=0; i<s.length; i++) {
        sCount[s[i].charCodeAt(0)-97]++;
        
        if (i>=p.length) {
            sCount[s[i-p.length].charCodeAt(0)-97]--;
        }
        
        if (sCount.join("")===pCount.join("")) {
            res.push(i-p.length+1);
        }
    }
    
    
    return res;
    
};