/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    if (prices.length <= 1) return 0;
    
    let buy = prices[0];
    let sell = prices[1];
    let profit = Math.max(0, sell-buy);
    for (let i=2; i<prices.length; i++) {
        if (buy>sell) {
            buy=sell;
        }
        sell = prices[i];
        profit = Math.max(profit, sell-buy);
    }
    
    return profit;
};