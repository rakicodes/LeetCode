/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    
    let res = [];
    
    if (matrix.length===0) return res;
    
    let rowBegin = 0;
    let rowEnd = matrix.length-1;
    let colBegin = 0;
    let colEnd = matrix[0].length-1;
    
    while (rowBegin <= rowEnd && colBegin <= colEnd) {
        
        for (let col=colBegin; col<=colEnd; col++) {
            res.push(matrix[rowBegin][col]);
        }
        
        rowBegin++;
        
        for (let row=rowBegin; row<=rowEnd; row++) {
            res.push(matrix[row][colEnd]);
        }
        
        colEnd--;
        
        if (rowBegin<=rowEnd) {
            for (let col=colEnd; col>=colBegin; col--) {
                res.push(matrix[rowEnd][col]);
            }
        }
        
        rowEnd--;
        
        if (colBegin<=colEnd) {
            for (let row=rowEnd; row>=rowBegin; row--) {
                res.push(matrix[row][colBegin])
            }
        }
        
        colBegin++;
    }
    
    return res;
    
};