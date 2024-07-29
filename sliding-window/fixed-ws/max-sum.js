/**
 * Find maximum (or minimum) sum of a subarray of size k
 * Given an array of integers and a number k, find the maximum sum of a subarray of size k.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  let i = 0,
    j = 0,
    sum = 0,
    maxsum = Number.MIN_VALUE;
  let n = nums.length;

  while (j < n) {
    sum = sum + nums[j];
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 == k) {
      maxsum = Math.max(maxsum, sum);
      sum = sum - nums[i];

      i++;
      j++;
    }
  }

  let res = maxsum == Number.MIN_VALUE ? 0 : maxsum;
  console.log(res);
  return res;
};

let nums = [1, 4, 2, 10, 23, 3, 1, 0, 20],
  k = 4;

maximumSubarraySum(nums, k);

//Problem-2
/**
 * **************MAXIMUM SUM OF DISTINCT SUBARRAY WITH LENGTH K *************************
 * You are given an integer array nums and an integer k. Find the maximum subarray sum of all the subarrays of nums
 * that meet the following conditions: The length of the subarray is k, and All the elements of the subarray are distinct.
 * Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return 0.
 * Input: nums = [1,5,4,2,9,9,9], k = 3; Output: 15
 * Input: nums = [4,4,4], k = 3; Output: 0
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  let i = 0,
    j = 0,
    sum = 0,
    maxsum = Number.MIN_VALUE;
  let n = nums.length;
  let map = new Map();
  while (j < n) {
    if (!map.has(nums[j])) {
      map.set(nums[j], { val: 1 });
    } else {
      map.get(nums[j]).val++;
    }
    sum += nums[j];

    if (j - i + 1 < k) j++;
    else if (j - i + 1 == k) {
      //ans
      if (map.size == k) {
        maxsum = Math.max(maxsum, sum);
      }
      //cal i
      map.get(nums[i]).val--;
      sum = sum - nums[i];
      if (map.get(nums[i]).val == 0) {
        map.delete(nums[i]);
      }
      i++;
      j++;
    }
  }

  let res = maxsum == Number.MIN_VALUE ? 0 : maxsum;
  return res;
};
