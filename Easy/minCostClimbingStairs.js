var minCostClimbingStairs = function(cost) {
    if (cost.length===0) return 0;
    
    let dp = [];
    dp[0] = 0;
    dp[1] = 0;
    for (let i=2; i<=cost.length; i++) {
        dp[i] = Math.min(dp[i-1]+cost[i-1], dp[i-2]+cost[i-2]);
    }
    

    return dp[cost.length];
};