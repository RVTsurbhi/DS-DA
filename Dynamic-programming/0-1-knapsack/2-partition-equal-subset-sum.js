/**
 * @param {number[]} nums
 * @return {boolean}
 * Given an integer array nums, return true if you can partition the array into two subsets 
 * such that the sum of the elements in both subsets is equal or false otherwise. 
    Example 1:
    Input: nums = [1,5,11,5]
    Output: true
    Explanation: The array can be partitioned as [1, 5, 5] and [11].
 */

const subsetSum = function (arr, sum) {
  let n = arr.length;
  let w = sum;
  let dp = new Array(n + 1);
  //initialization
  for (i = 0; i < n + 1; i++) {
    dp[i] = new Array(w + 1);
    for (j = 0; j < w + 1; j++) {
      dp[i][j] = 0;
      if (i == 0) {
        //capacity is >0 and arr is empty
        dp[i][j] = false;
      }
      if (j == 0) {
        //capacity is 0, then we can have empty arr
        dp[i][j] = true;
      }
    }
  }

  for (i = 1; i <= n; i++) {
    for (j = 1; j <= w; j++) {
      if (arr[i - 1] <= j) {
        dp[i][j] = dp[i - 1][j - arr[i - 1]] || dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  console.log(dp[n][w]);
  return dp[n][w];
};

const arr = [1, 5, 11, 5];

var canPartition = function (nums) {
  let sum = 0;

  for (let k = 0; k < nums.length; k++) {
    sum += nums[k];
  }
  if (sum % 2 != 0) return false;

  return subsetSum(nums, sum / 2);
};
