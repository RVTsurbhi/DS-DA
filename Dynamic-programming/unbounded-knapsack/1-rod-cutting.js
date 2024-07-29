/*
    Given a rod of length n inches and an array of prices that includes prices of all pieces of size smaller than n.
    Determine the maximum value obtainable by cutting up the rod and selling the pieces.

*/
const unboundedKnapsack = (lenArr, priceArr, max_size) => {
  let w = max_size;
  let n = lenArr.length;
  let dp = new Array(n + 1);

  for (let i = 0; i < n + 1; i++) {
    dp[i] = new Array(w + 1);
    for (j = 0; j < w + 1; j++) {
      if (i == 0 || j == 0) {
        // The maximum price will be zero,
        // when either the length of the rod
        dp[i][j] = 0;
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    for (j = 1; j <= w; j++) {
      if (lenArr[i - 1] <= j) {
        dp[i][j] = Math.max(
          priceArr[i - 1] + dp[i][j - lenArr[i - 1]],
          dp[i - 1][j]
        );
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  console.log(dp);
  console.log(dp[n][w]);
  return dp[n][w];
};

let length = [1, 2, 3, 4, 5, 6, 7, 8];
// let price = [1, 5, 8, 9, 10, 17, 17, 20]; //o/p = 22
let price = [3, 5, 8, 9, 10, 17, 17, 20]; //o/p = 24
let size = 8;

unboundedKnapsack(length, price, size);
