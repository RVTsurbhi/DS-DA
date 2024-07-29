/** Longest Repeating Subsequence
 * Given a string, find the length of the longest repeating subsequence, such that the two subsequences don’t have
 * same string character at the same position, i.e. any ith character in the two subsequences shouldn’t have the same index
 * in the original string.
 */

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var LongestRepeatingSequence = function (str1, str2) {
  let m = str1.length;
  let n = str2.length;
  let lcs = new Array(m + 1);

  for (let i = 0; i < m + 1; i++) {
    lcs[i] = new Array(n + 1);
    for (let j = 0; j < n + 1; j++) {
      if (i == 0 || j == 0) {
        lcs[i][j] = 0;
      }
    }
  }

  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (str1[i - 1] == str2[j - 1] && i != j) {
        lcs[i][j] = 1 + lcs[i - 1][j - 1];
      } else {
        lcs[i][j] = Math.max(lcs[i][j - 1], lcs[i - 1][j]);
      }
    }
  }  
  console.log(lcs[m][n]);
  return;
};

let s1 = "AABEBCDD";
LongestRepeatingSequence(s1, s1);
