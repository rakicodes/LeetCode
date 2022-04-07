var generate = function(numRows) {
    if (numRows === 1) return [[1]];
    if (numRows === 2) return [[1],[1,1]];
    
    let dp = [];
    dp.push([1]);
    dp.push([1,1]);
    for (let i=2; i<numRows; i++) {
        dp.push([1,1]);
        for (let j=1; j<i; j++) {
            dp[i].splice(j, 0, dp[i-1][j-1]+dp[i-1][j])
        }
    }
    
    return dp;
};