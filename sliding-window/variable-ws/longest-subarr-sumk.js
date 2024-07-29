/**
 * Longest sub-array having sum k
 * Given an array arr[] of size n containing integers. 
 * The problem is to find the length of the longest sub-array having sum equal to the given value k.
 * Input: arr[] = { 10, 5, 2, 7, 1, 9 }, k = 15
    Output: 4
    Explanation: The sub-array is {5, 2, 7, 1}.

    Input: arr[] = {-5, 8, -14, 2, 4, 12}, k = -5
    Output: 5
 */

//This function will only work with +ve numbers
var subarraySum = function (nums, k) {
  let i = 0,
    j = 0,
    maxSubarr = 0,
    sum = 0;

  while (j < nums.length) {
    sum = sum + nums[j];

    if (sum < k) {
      j++;
    } else if (sum == k) {
      maxSubarr = Math.max(maxSubarr, j - i + 1);
      j++;
    } else if (sum > k) {
      while (sum > k && i <= j) {
        sum = sum - nums[i];
        i++;
      }
      j++;
    }
  }
  console.log("maxSubarr", maxSubarr);
  return maxSubarr;
};

//NOTE: This function works with both with +ve & -ve numbers
var longestSubarray = function (nums, k) {
  let j = 0,
    sum = 0,
    maxLength = 0;
  let n = nums.length,
    map = new Map();
  while (j < n) {
    sum += nums[j];

    //save sum with current idx
    if (!map.has(sum)) {
      map.set(sum, j);
    }  
    if (sum == k) {
      maxLength = Math.max(maxLength, j + 1);
    }

    //check if sum-k val present in map, if found then update maaxlength by sub curr idx with sum-k idx
    let val = sum - k;
    if (map.has(val)) {
      let idx = j - map.get(val);
      maxLength = Math.max(idx, maxLength);
    }
    j++;
  }
  console.log(maxLength);
  return maxLength;
};

subarraySum([10, 5, 2, 7, 1, 9], 15);
subarraySum([4, 1, 1, 1, 2, 3, 5], 5);

let arr = [-5, 8, -14, 2, 4, 12], //Output: 5
  k = -5;
longestSubarray(arr, k);
longestSubarray([10, 5, 2, 7, 1, 9], 15);
longestSubarray([4, 1, 1, 1, 2, 3, 5], 5);
