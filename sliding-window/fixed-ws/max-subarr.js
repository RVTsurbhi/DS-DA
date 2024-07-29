/**
 * Maximum of all subarray of size K
 * Given an array arr[] of size N and an integer K. Find the maximum for each and every contiguous subarray of size K.
 * Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
 * Output: [3,3,5,5,6,7]
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let i = 0,
    j = 0,
    list = [],
    ans = [];
  let n = nums.length;
  while (j < n) {
    while (list.length > 0 && list[list.length - 1] < nums[j]) {
      list.pop();
    }
    list.push(nums[j]);

    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 == k) {
      ans.push(list[0]);
      if (nums[i] == list[0]) {
        list.shift();
      }
      i++;
      j++;
    }
  }

  return ans;
};
