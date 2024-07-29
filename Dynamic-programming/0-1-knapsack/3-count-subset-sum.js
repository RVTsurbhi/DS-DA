/* Given an array arr of size n of non-negative integers and an integer sum, 
the task is to count all subsets of the given array with a sum equal to a given sum.
Input: 
n = 6, arr = [5, 2, 3, 10, 6, 8], sum = 10
Output: 
3
Explanation: 
{5, 2, 3}, {2, 8}, {10} are possible subsets.
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
        dp[i][j] = 0;
      }
      if (j == 0) {
        //capacity is 0, then we can have empty arr
        dp[i][j] = 1;
      }
    }
  }

  for (i = 1; i <= n; i++) {
    for (j = 1; j <= w; j++) {
      if (arr[i - 1] <= j) {
        dp[i][j] = dp[i - 1][j - arr[i - 1]] + dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  //i=1, j=1 --> arr[0]= 2, dp[1][1] = dp[0][1-2] + dp[0][1] = 0

  console.log(dp);
  console.log(dp[n][w]);
  return dp[n][w];
};

const arr = [2, 3, 5, 6, 8, 10];
let sum = 10;

subsetSum(arr, sum);
