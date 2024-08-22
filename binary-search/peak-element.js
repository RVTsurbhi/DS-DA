/**
 * Find Peak Element
 * A peak element is an element that is strictly greater than its neighbors.
 * Given a 0-indexed integer array nums, find a peak element, and return its index. 
 * If the array contains multiple peaks, return the index to any of the peaks.
 * You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.
 * You must write an algorithm that runs in O(log n) time.
    Example 1:
    Input: nums = [1,2,3,1]
    Output: 2
    Explanation: 3 is a peak element and your function should return the index number 2.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let start = 0,
    end = nums.length - 1;
  if (nums.length == 1) return 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (mid > 0 && mid < nums.length - 1) {
      if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) {
        return mid;
      } else if (nums[mid] < nums[mid + 1]) {
        start = mid + 1;
      } else {
        //smaller than mid-1
        end = mid - 1;
      }
    } else if (mid == 0) {
      if (nums[mid] > nums[mid + 1]) {
        return mid;
      } else {
        return mid + 1;
      }
    } else {
      //mid reached to nums.length
      if (nums[mid] > nums[mid - 1]) {
        return mid;
      } else {
        return mid - 1;
      }
    }
  }
};
