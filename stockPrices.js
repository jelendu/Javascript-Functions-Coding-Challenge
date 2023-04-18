// This challenge, you’ll write a function, called best, that returns the maximum profit possible for buying-and-selling a stock.

// The best function will be given an array of stock prices in the order they happened throughout the day.

// It should return the maximum possible profit on the stock for that day.

// For example, with the following prices, our best option would have been to buy the stock at $10 and sell it at $22. So the profit would be $12:

function best(prices) {
  let maxProfit = 0;
  let miniPrice = Infinity;
  for (let i = 0; i < prices.length; i++) {
    let currentPrice = prices[i];
    if (currentPrice < miniPrice) {
      miniPrice = currentPrice;
    }
    let futureProfit = currentPrice - miniPrice;
    if (futureProfit > maxProfit) {
      maxProfit = futureProfit;
    }
  }

  return maxProfit;
}
let prices = [15, 10, 20, 22, 1, 9];
let result = best(prices);
console.log(result);
