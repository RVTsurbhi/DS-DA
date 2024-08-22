/**
 *  Minimum Size Subarray Sum
 * Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray
 * whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.
 *  Example 1:
    Input: target = 7, nums = [2,3,1,2,4,3]
    Output: 2
    Explanation: The subarray [4,3] has the minimal length under the problem constraint.

    Input: target = 11, nums = [1,1,1,1,1,1,1,1]
    Output: 0
 */

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let i = 0,
    j = 0,
    res = Number.MAX_VALUE,
    sum = 0;
  while (j < nums.length) {
    sum += nums[j];
    if (sum < target) {
      j++;
    } else if (sum >= target) {
      while (sum >= target) {
        res = Math.min(j - i + 1, res);
        sum -= nums[i];
        i++;
      }
      j++;
    }
  }
  return res == Number.MAX_VALUE ? 0 : res;
};
