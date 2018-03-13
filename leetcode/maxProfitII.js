// 121. Best Time to Buy and Sell Stock

// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Example 1:
// Input: [7, 1, 5, 3, 6, 4]
// Output: 5

// max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
// Example 2:
// Input: [7, 6, 4, 3, 1]
// Output: 0

// In this case, no transaction is done, i.e. max profit = 0.

var maxProfit = function(prices) {
  let min = prices[0];
  let max = 0; 
  let maxProfits = 0; 

  // loop through the prices array 
  for (let price of prices) {
    
    // if the price is lower than the min 
    if (price < min) { 
      min = price;
      max = 0; 
      // if the price is higher than max or max does not exist : update the max
    } else if (price > max) max = price; 
    if (max - min > maxProfits) maxProfits = max - min; 
  }
  
  return maxProfits;
};

console.log(maxProfit([7, 3, 5, 1, 6, 4]));