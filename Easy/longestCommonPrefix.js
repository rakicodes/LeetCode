/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let prefix = "";
    
    const minLength = Math.min(...strs.map(word => word.length));
    for (let i=0; i<minLength; i++) {
        let curr = strs[0][i];
        if (strs.every( word => word[i]===curr)) {
            prefix += curr;
        } else {
            break;
        }
    }
    return prefix;
};