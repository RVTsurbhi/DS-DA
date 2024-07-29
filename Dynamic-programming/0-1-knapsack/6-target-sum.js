/*
You are given an integer array nums and an integer target.
You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.

For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".
Return the number of different expressions that you can build, which evaluates to target.

Input: nums = [1,1,1,1,1], target = 3
Output: 5
Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let arrSum = 0;
  for (let i = 0; i < nums.length; i++) {
    arrSum += nums[i];
  }
  let sum = Math.floor((target + arrSum) / 2);
  let n = nums.length;
  let w = sum;
  let dp = new Array(n + 1);

  //initialize
  for (i = 0; i < n + 1; i++) {
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
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= w; j++) {
      if (nums[i - 1] <= j) {
        dp[i][j] = dp[i - 1][j - nums[i - 1]] + dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[n][w];
};
