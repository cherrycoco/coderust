// 198. House Robber

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

var rob = function(nums) {
  let dp = new Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    let max = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
    (i === 0 || i === 1) ? dp[i] = nums[i] : dp[i] = max;
  }

  return dp[dp.length - 1];
};

console.log(rob([4, 8, 2, 0, 5]));