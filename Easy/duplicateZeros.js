var duplicateZeros = function(arr) {
    let i=0;
    let oldLength = arr.length;
    while (i < oldLength) {
        if (arr[i]===0) {
            arr.splice(i,0,0);
            arr.pop();
            i++;
        }
        i++;
    }
};