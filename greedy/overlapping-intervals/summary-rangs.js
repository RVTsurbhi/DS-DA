/*** Summary Ranges ****/
/**
 * You are given a sorted unique integer array nums.
 * A range [a,b] is the set of all integers from a to b (inclusive).
 * Return the smallest sorted list of ranges that cover all the numbers in the array exactly. 
 * That is, each element of nums is covered by exactly one of the ranges, and there is no integer x 
 * such that x is in one of the ranges but not in nums.
 * Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
 */

var summaryRanges = function (nums) {
  let res = [],
    n = nums.length;
  for (let i = 0; i < n; i++) {
    let start = nums[i];
    while (i < n && nums[i] + 1 == nums[i + 1]) {
      i++;
    }
    if (start != nums[i]) {
      res.push(start + "->" + nums[i]);
    } else {
      res.push(nums[i] + "");
    }
  }
  return res;
};
