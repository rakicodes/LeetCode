var canPermutePalindrome = function(s) {
    let map = new Map();
    
    for (let i=0; i<s.length; i++) {
        if (map.has(s[i])) {
            map.delete(s[i]);
        } else {
            map.set(s[i], 1);
        }
    }
    
    return map.size > 1 ? false : true;
};