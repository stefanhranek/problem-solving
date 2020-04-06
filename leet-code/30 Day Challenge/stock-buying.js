/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let stock = 0;
  let profit = 0;
  let hasStock = false;

  const buy = (currentStockPrice) => {
    stock = currentStockPrice;
    hasStock = true;
  };

  const sell = (currentStockPrice, stockHolding) => {
    profit += currentStockPrice - stockHolding;
    stock = 0;
    hasStock = false;
  };

  for (let i = 0; i < prices.length; i++) {
    if ((prices[i] > stock && stock > 0) || (hasStock === true && stock == 0)) {
      sell(prices[i], stock);
    }
    if (
      (prices[i] < prices[i + 1] && stock === 0) ||
      (hasStock === false && prices[i] === 0)
    ) {
      buy(prices[i]);
    }
  }
  return profit;
};
