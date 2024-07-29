/**
 *  Longest Palindromic Subsequence
 * Given a string s, find the longest palindromic subsequence's length in s.
 * A subsequence is a sequence that can be derived from another sequence by deleting some or no elements 
 * without changing the order of the remaining elements.
 * Example 1:
    Input: s = "bbbab"
    Output: 4
    Explanation: One possible longest palindromic subsequence is "bbbb".
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  let str2 = "";

  //reverse str
  str2 = s.split("").reverse().join("");
  // for(let i=s.length; i>0; i--){
  //     str2 = str2 + s[i]
  // }
  let m = s.length;
  let lps = new Array(m + 1);

  for (let i = 0; i < m + 1; i++) {
    lps[i] = new Array(m + 1);
    for (let j = 0; j < m + 1; j++) {
      if (i == 0 || j == 0) {
        lps[i][j] = 0;
      }
    }
  }

  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      if (s[i - 1] == str2[j - 1]) {
        lps[i][j] = 1 + lps[i - 1][j - 1];
      } else {
        lps[i][j] = Math.max(lps[i][j - 1], lps[i - 1][j]);
      }
    }
  }

  return lps[m][m];
};
