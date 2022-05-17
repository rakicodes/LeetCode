/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    let words = [];
    let word = "";
    for (let i=0; i<s.length; i++) {
        if (word && s[i]===" "){
            words.unshift(word)
            word = "";
        } else if (s[i]!==" "){
            word+=s[i];
        }
    }
    if (word) {
        words.unshift(word);
    }
    
    return words.join(" ")
};