/**
 * Search in rotated array
 * There is an integer array nums sorted in ascending order (with distinct values).
 * Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) 
 * such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
 *  For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
 * Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
 * You must write an algorithm with O(log n) runtime complexity.
 * Example 1:
    Input: nums = [4,5,6,7,0,1,2], target = 0
    Output: 4
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let min = minElement(nums);
  let left = bs(0, min - 1, target, nums);
  let right = bs(min, nums.length - 1, target, nums);
  return left == -1 ? right : left;
};

let minElement = function (nums) {
  let start = 0,
    end = nums.length - 1,
    n = nums.length;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let prev = (mid - 1) % n;
    let next = (mid + 1) % n;

    if (nums[mid] <= nums[prev] && nums[mid] <= nums[next]) {
      return mid;
    } else if (nums[mid] <= nums[end]) {
      end = mid - 1;
    } else if (nums[start] <= nums[mid]) {
      start = mid + 1;
    }
  }
  return start;
};

let bs = function (start, end, target, nums) {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] < target) {
      start = mid + 1;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};
