/**
 * @param {number[][]} costs
 * @return {number}
 */
 var minCost = function(costs) {

    for (let i=costs.length-1; i>0; i--) {
        costs[i-1][0] += Math.min(costs[i][1], costs[i][2]);
        costs[i-1][1] += Math.min(costs[i][0], costs[i][2]);
        costs[i-1][2] += Math.min(costs[i][0], costs[i][1]);
    }
    
    return Math.min(costs[0][0], Math.min(costs[0][1],costs[0][2]));
};