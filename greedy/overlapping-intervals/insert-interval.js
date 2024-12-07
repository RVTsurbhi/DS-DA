/*** 57. Insert Interval ****/
/**
 * Insert newInterval into intervals such that intervals is still sorted in ascending order by starti
 * and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
    Output: [[1,5],[6,9]]
 */

var insert = function (intervals, newInterval) {
  let res = [],
    i = 0,
    n = intervals.length;
  //left portion
  while (i < n && intervals[i][1] < newInterval[0]) {
    res.push(intervals[i]);
    i++;
  }
  //overlap intervals
  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  res.push(newInterval);
  //right side
  while (i < n) {
    res.push(intervals[i]);
    i++;
  }
  return res;
};
