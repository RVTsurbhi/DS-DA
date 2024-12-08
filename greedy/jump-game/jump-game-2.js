/**** 45. Jump Game II ****/
/**
 * Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i],
 *  you can jump to any nums[i + j] where:
 * 0 <= j <= nums[i] and i + j < n
 * Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].
 */

var jump = function (nums) {
  n = nums.length;

  /*** RECURSION ***/
  // function helper(idx, jumps){
  //     if(idx == n-1) return jumps;
  //     let mini = Number.MAX_VALUE;
  //     for(let i=1; i<=nums[idx]; i++){
  //         let steps = helper(idx+i, jumps+1)
  //         mini = Math.min(mini, steps)
  //     }
  //     return mini
  // }
  // return helper(0,0)

  /*** MEMOIZATION ****/
  // let dp = new Array(n).fill(null).map(()=> new Array(n).fill(-1))
  // function memo(idx, jumps){
  //     if(idx >= n-1) return jumps;
  //     if(dp[idx][jumps] != -1) return dp[idx][jumps];
  //     let mini = Number.MAX_VALUE;
  //     for(let i=1; i<=nums[idx]; i++){
  //         let steps = memo(idx+i, jumps+1)
  //         mini = Math.min(mini, steps)
  //     }
  //     return dp[idx][jumps] = mini
  // }
  // return memo(0,0)

  /**** RANGE ****/
  let jumps = 0,
    l = 0,
    r = 0;
  while (r < n - 1) {
    let farthest = 0;
    for (let i = l; i <= r; i++) {
      farthest = Math.max(i + nums[i], farthest);
    }
    l = r + 1;
    r = farthest;
    jumps++;
  }
  return jumps;
};
