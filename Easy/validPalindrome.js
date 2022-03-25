/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let reversed = removeNonAlphaNumeric(s.slice()).reverse().join("");
    s = removeNonAlphaNumeric(s).join("");
    
    return reversed.toLowerCase() === s.toLowerCase();  
};

const removeNonAlphaNumeric = function(s) {
    let alphaNumeric = s.split("").filter( (char,i) => {
        code = char.charCodeAt(0);
        if ((code > 47 && code < 58) || (code > 64 && code < 91) || (code > 96 && code < 123)) {
            return true;
        }
    });
    return alphaNumeric;
        
}