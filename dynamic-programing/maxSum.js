const maxSum = (arr) => {
  let dp = new Array(arr.length);
  dp.fill(0);
  dp[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (i - 2 >= 0) {
      dp[i] = Math.max(dp[i - 1], arr[i] + dp[i - 2]);
    } else {
      dp[i] = Math.max(dp[i - 1], arr[i]);
    }
  }

  return dp[dp.length - 1];
}

console.log(maxSum([1, -1, 6, -4, 2, 2]));