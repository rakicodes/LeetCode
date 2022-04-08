/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var replaceElements = function(arr) {
    for (let i=0; i<arr.length-1; i++) {
        arr[i] = Math.max(...arr.slice(i+1));
    }
    arr[arr.length-1] = -1;
    return arr;
    
};