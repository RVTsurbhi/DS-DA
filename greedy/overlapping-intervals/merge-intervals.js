/**** 56. Merge Intervals ****/
/**
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
 * and return an array of the non-overlapping intervals that cover all the intervals in the input.
 */

var merge = function (intervals) {
  if (intervals.length == 0) return [];

  intervals.sort((a, b) => a[0] - b[0]);

  let res = [],
    n = intervals.length;
  let start = intervals[0][0],
    end = intervals[0][1];
  // let min = intervals[0][0], max = intervals[0][1]
  // res.push(res)
  for (let i = 0; i < n; i++) {
    if (intervals[i][0] <= end) {
      // start = Math.min(intervals[i][0], start)
      end = Math.max(intervals[i][1], end);
      // res.push([start, end])
    } else {
      res.push([start, end]);
      start = intervals[i][0];
      end = intervals[i][1];
    }
  }
  res.push([start, end]);
  return res;
};
