/* 
* Given an array arr[] of size N and a given difference diff, the task is to count the number of partitions 
* that we can perform such that the difference between the sum of the two subsets is equal to the given difference.
* Note: A partition in the array means dividing an array into two parts say S1 and S2 
* that the union of S1 and S2 is equal to the original array and each element is present in only of the subsets.

*   Input: N = 4, arr[] = [5, 2, 6, 4], diff = 3
    Output: 1
    Explanation: We can only have a single partition which is shown below:
    {5, 2} and {6, 4} such that S1 = 7 and S2 = 10 and thus the difference is 3
*/

const subsetSum = (arr, sum) => {
  let n = arr.length;
  let w = sum;
  let dp = new Array(n + 1);
  //initialization
  for (i = 0; i < n + 1; i++) {
    dp[i] = new Array(w + 1);
    for (j = 0; j < w + 1; j++) {
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

  console.log(dp);
  console.log(dp[n][w]);
  return dp[n][w];
};

const countSubsets = (arr, diff) => {
  let arrSum = 0;
  for (let k = 0; k < arr.length; k++) {
    arrSum += arr[k];
  }
  //formula
  let sum = Math.floor((arrSum + diff) / 2);

  let result = subsetSum(arr, sum);

  return result;
};

// const arr = [1, 2, 3, 1, 2],
//   diff = 1;
const arr = [5, 2, 6, 4],
  diff = 3;
countSubsets(arr, diff);
