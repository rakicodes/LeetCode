var checkIfExist = function(arr) {
    return arr.some( (elem,i) => arr.includes(2*elem) && i !== arr.indexOf(2*elem));
};