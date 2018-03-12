// 122. Best Time to Buy and Sell Stock II
// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

// var maxProfit = function(prices) {
//   let purchase;
//   let profit = 0;

//   // loop through the prices
//   for (let i = 0; i < prices.length; i++) {
//     let currentVal = prices[i];
//     let nextVal = prices[i + 1];
    
//     // if already purchased
//     if (purchase !== undefined) {
//       // if nextVal < currentVal
//       if (nextVal === undefined || nextVal < currentVal) {
//         // record profit
//         profit += currentVal - purchase;
        
//         // sell the stock at current Val
//         purchase = undefined;
//       }
      
//       // if not already purchased
//     } else {

//       // if nextVal > currentVal
//       if (nextVal > currentVal) {
        
//         // purchase at currentVal
//         purchase = currentVal;
//       }
//     }
//   }
  
//   return profit;
// };

const maxProfit = (nums) => {
  let profit = 0;
  for (let i = 1; i < nums.length; i++) {
    let currentVal = nums[i];
    let prevVal = nums[i - 1];

    currentVal > prevVal ? profit += currentVal - prevVal : profit
  }

  return profit;
}
console.log(maxProfit([2,1,2,0,1]));