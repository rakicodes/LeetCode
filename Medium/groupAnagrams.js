var groupAnagrams = function(strs) {
    let map = new Map();
    for (let i=0; i<strs.length; i++) {
        let key = strs[i].split("").sort().join("");
        if (map.get(key)) {
            map.set(key, [...map.get(key), strs[i]])
        } else {
            map.set(key, [strs[i]]);
        }
    }
    
    let arr = [];
    for (let [key,value] of map) {
        arr.push(value);
    }
    
    return arr;
};