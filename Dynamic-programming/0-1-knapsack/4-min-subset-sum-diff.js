/**
 * @param {number[]} nums
 * @return {number}
 * Given a set of integers, the task is to divide it into two sets S1 and S2 such that 
 * the absolute difference between their sums is minimum. 
 * If there is a set S with n elements, then if we assume Subset1 has m elements, 
 * Subset2 must have n-m elements and the value of abs(sum(Subset1) – sum(Subset2)) should be minimum.
 * NOTE: only +ve intergers
 * Input:  arr[] = {1, 6, 11, 5} 
    Output: 1
    Explanation:
    Subset1 = {1, 5, 6}, sum of Subset1 = 12 
    Subset2 = {11}, sum of Subset2 = 11 
 */
var minimumDifference = function (nums) {
  let sum = 0;
  for (i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  let n = nums.length;
  let w = sum;
  let dp = new Array(n + 1);

  //initialization
  for (let i = 0; i < n + 1; i++) {
    dp[i] = new Array(w + 1);
    for (let j = 0; j < w + 1; j++) {
      // dp[i][j] = 0;
      if (i == 0) {
        dp[i][j] = false;
      }
      if (j == 0) {
        dp[i][j] = true;
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= w; j++) {
      if (nums[i - 1] <= j) {
        dp[i][j] = dp[i - 1][j - nums[i - 1]] || dp[i - 1][j];
      } else {
        dp[i - 1][j];
      }
    }
  }

  let diff = Number.MAX_VALUE;
  // Find the largest j such that dp[n][j]
  // is true where j loops from sum/2 t0 0
  for (let j = 0; j <= Math.floor(sum / 2); j++) {
    if (dp[n][j] === true) {
      diff = Math.min(diff, sum - 2 * j);
    }
  }
  console.log(diff);
  return diff;
};

minimumDifference(arr);
