/*
You are given an integer array coins representing coins of different denominations and an integer amount
representing a total amount of money.
Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.
You may assume that you have an infinite number of each kind of coin. 

Input: amount = 5, coins = [1,2,5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1

Example 2:
Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 2.

Example 3:
Input: amount = 10, coins = [10]
Output: 1
*/

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  let n = coins.length;
  let w = amount;
  let dp = new Array(n + 1);

  for (let i = 0; i < n + 1; i++) {
    dp[i] = new Array(w + 1);
    for (j = 0; j < w + 1; j++) {
      if (i == 0) {
        dp[i][j] = 0;
      }
      if (j == 0) {
        dp[i][j] = 1;
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    for (j = 1; j <= w; j++) {
      if (coins[i - 1] <= j) {
        dp[i][j] = dp[i][j - coins[i - 1]] + dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[n][w];
};
