/*
Problem statement 
Given a set of non-negative integers and a value sum, the task is to check if there is a subset of the given set 
whose sum is equal to the given sum.

Input: set[] = {3, 34, 4, 12, 5, 2}, sum = 9
Output: True
Explanation: There is a subset (4, 5) with sum 9.
*/

const subsetSum = (arr, sum) => {
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

  //i=1, j=1 --> arr[0]= 2, dp[1][1] = dp[0][1] = f
  //i=1, j=2 --> arr[0] =2, dp[1][2] => dp[0][2-2 = 0]=t || dp[0][2] = f
  //i=1, j=3 --> arr[0]=2, dp[1][3] => dp[0][3-2=1] = f || dp[0][3] = f
  //i=2, j=1 --> arr[1]=3, dp[2][1] => dp[1][1] = f
  //i=2, j=2 --> arr[1]=3, dp[2][2] => dp[1][2] = t

  console.log(dp);
  console.log(dp[n][w]);
  return dp[n][w];
};

const arr = [2, 3, 7, 8, 10];
const sum = 11;
subsetSum(arr, sum);

