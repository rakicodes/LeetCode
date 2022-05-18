/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var numWays = function(n, k) {
    if (n===1) return k;
    if (n===2) return k*k;
    
    let dp = [];
    dp[0] = k;
    dp[1] = k*k;
    for (let i=2; i<n; i++) {
        dp[i] = (k-1) * (dp[i-1]+dp[i-2])
    }
        
    return dp[n-1];
};