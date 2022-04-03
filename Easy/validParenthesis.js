/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let brackets = [];
    for (let i=0; i<s.length; i++) {
        if (s[i]==='(' || s[i]==='{' || s[i]==='[') {
            brackets.push(s[i]);
        } else if (s[i]===')' && brackets.length !== 0 && brackets[brackets.length-1]==='(') {
            brackets.pop();
        } else if (s[i]==='}' && brackets.length !== 0 && brackets[brackets.length-1]==='{') {
            brackets.pop();
        } else if (s[i]===']' && brackets.length !== 0 && brackets[brackets.length-1]==='[') {
            brackets.pop();
        } else {
            return false;
        }
     }
    
    return brackets.length > 0 ? false : true;
};