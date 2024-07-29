/**
 * First negative in every window of size k
 * Given an array A[] of size N and a positive integer K,
 * find the first negative integer for each and every window(contiguous subarray) of size K
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstNegativeNumSubarr = function (nums, k) {
  let i = 0,
    j = 0,
    queue = [],
    list = [];
  let n = nums.length;

  while (j < n) {
    if (nums[j] < 0) {
      queue.push(nums[j]);
    }
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 == k) {
      if (queue.length == 0) {
        list.push(0);
      } else {
        list.push(queue[0]);

        if (nums[i] == queue[0]) {
          queue.shift();
        }
      }

      i++;
      j++;
    }
  }
  console.log(list);
  return list;
};

// let nums = [-8, 2, 3, -6, 10],
//   k = 2;

let nums = [12, -1, -7, 8, -15, 30, 16, 28];
let k = 3;

firstNegativeNumSubarr(nums, k);
