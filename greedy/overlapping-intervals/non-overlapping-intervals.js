/*** 435. Non-overlapping Intervals ****/
/**
 * Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals
 * you need to remove to make the rest of the intervals non-overlapping.
 * Note that intervals which only touch at a point are non-overlapping. For example, [1, 2] and [2, 3] are non-overlapping.
 */

var eraseOverlapIntervals = function (intervals) {
  let n = intervals.length;

  intervals.sort((a, b) => a[1] - b[1]);

  let end = intervals[0][1],
    count = 1;

  for (let i = 1; i < n; i++) {
    if (intervals[i][0] >= end) {
      count++;
      end = Math.max(intervals[i][1], end);
    }
  }
  return n - count;
};
