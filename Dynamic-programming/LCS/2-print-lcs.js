/*
* Given two strings text1 and text2, return the length of their longest common subsequence. 
If there is no common subsequence, return 0.
For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

Input: text1 = "abcde", text2 = "ace" 
Output: ace  
Explanation: The longest common subsequence is "ace" and its length is 3.
*/

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  let m = text1.length;
  let n = text2.length;
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
      if (text1[i - 1] == text2[j - 1]) {
        lcs[i][j] = 1 + lcs[i - 1][j - 1];
      } else {
        lcs[i][j] = Math.max(lcs[i][j - 1], lcs[i - 1][j]);
      }
    }
  }

  // return lcs[m][n]

  let str = "";
  let i = m,
    j = n;
  while (i > 0 && j > 0) {
    if (text1[i - 1] == text2[j - 1]) {
      str = str + text1[i - 1];
      i--;
      j--;
    } else {
      if (lcs[i][j - 1] > lcs[i - 1][j]) {
        j--;
      } else {
        i--;
      }
    }
  }
  let result = str.split("").reverse().join("");
  console.log(result);
  return result;
};
