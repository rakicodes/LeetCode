/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
    
    let dp = [];
    dp[0] = [1];
    dp[1] = [1,1];
    for (let i=2; i<=rowIndex; i++) {
        dp.push([1]);
        for (let j=1; j<i; j++) {
            dp[i].splice(i, 0, dp[i-1][j-1]+dp[i-1][j]);
        }
        dp[i].push(1);
       
    }
    
    return dp[rowIndex]
};