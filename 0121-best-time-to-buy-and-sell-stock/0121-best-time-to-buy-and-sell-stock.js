/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let minBuy = prices[0];
    let globalProfit = 0;

    for( let i=1; i < prices.length; i++) {
        const sell = prices[i];
        const currentProfit = sell - minBuy;

        if( sell < minBuy) {
            minBuy = sell;
        } else if ( currentProfit > globalProfit){
            globalProfit = currentProfit;
        }
    }

    return globalProfit;
};

 

