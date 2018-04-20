const gameScoring = (n) => {
  let dp = [];
  dp[0] = 1;
  let scores = [1, 2, 4];

  for (let i = 1; i <= n; i++) {
    let total = 0;
    scores.forEach(score => {
      if (i - score >= 0) {
        total += dp[i - score];
      }
    });

    dp[i] = total;
  }

  return dp[n];
}

console.log(gameScoring(5));