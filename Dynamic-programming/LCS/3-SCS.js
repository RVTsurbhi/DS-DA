/* Given two strings str1 and str2, the task is to find the length of the shortest string that has both str1 and str2 as subsequences.
Input:   str1 = "geek",  str2 = "eke"
Output: 5
Explanation: 
String "geeke" has both string "geek" 
and "eke" as subsequences.

Input:   str1 = "AGGTAB",  str2 = "GXTXAYB"
Output:  9
Explanation: 
String "AGXGTXAYB" has both string 
"AGGTAB" and "GXTXAYB" as subsequences. 
*/

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var shortestCommonSubsequence = function (text1, text2) {
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

  let result = m + n - lcs[m][n];
  console.log("res", result);
  return result;
};

let text1 = "AGGTAB",
  text2 = "GXTXAYB";

shortestCommonSubsequence(text1, text2);
