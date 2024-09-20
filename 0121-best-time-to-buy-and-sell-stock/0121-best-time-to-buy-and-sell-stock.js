/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    const isSingleNumber = prices.length <= 1;
    if (isSingleNumber) return 0;

    let [maxProfit,minPrice] = [0,prices[0]];

    for( let i=0; i < prices.length; i++) {
        const currentPrice = prices[i];
        const potentialProfit = currentPrice - minPrice;

        maxProfit = Math.max(potentialProfit,maxProfit);
        minPrice = Math.min(currentPrice,minPrice);
    }

    return maxProfit;
};

 

