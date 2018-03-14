// 53. Maximum Subarray

// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

// For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
// the contiguous subarray [4,-1,2,1] has the largest sum = 6.

// click to show more practice.

// More practice:
// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.


var maxSubArray = function(nums) {
  let globalMax = nums[0];
  let dp = new Array(nums.length);
  dp[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];
    let max = Math.max((num + dp[i - 1]), num);
    dp[i] = max;
    if (max > globalMax) globalMax = max;
  }

  return globalMax; 
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));