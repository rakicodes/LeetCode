/**
 * @param {number[][]} mat
 * @return {number[]}
 */
 var findDiagonalOrder = function(mat) {
    if (mat.length===0) return [];
    
    let m = mat.length;
    let n = mat[0].length;
    
    let arr = new Array(m+n-1).fill(null).map(x => []);
 
    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            if ( (i+j) % 2 === 0) {
                arr[i+j].unshift(mat[i][j])
            } else {
                arr[i+j].push(mat[i][j])
            }

        }
        
    }
    
    return arr.flat();
    
};

