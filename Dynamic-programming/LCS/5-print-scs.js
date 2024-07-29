/** Printing Shortest Common Supersequence
 * Given two strings str1 and str2, return the shortest string that has both str1 and str2 as subsequences. 
 * If there are multiple valid strings, return any of them.
 * Input: str1 = "abac", str2 = "cab"
 * Output: "cabac"
 * 
 *  Input: X = "AGGTAB",  Y = "GXTXAYB"
    Output: "AGXGTXAYB" OR "AGGXTXAYB" 
    OR Any string that represents shortest
    supersequence of X and Y
 * 
 */
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function (str1, str2) {
  let m = str1.length;
  let n = str2.length;
  let scs = new Array(m + 1);

  for (let i = 0; i < m + 1; i++) {
    scs[i] = new Array(n + 1);
    for (let j = 0; j < n + 1; j++) {
      if (i == 0 || j == 0) {
        scs[i][j] = 0;
      }
    }
  }

  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (str1[i - 1] == str2[j - 1]) {
        scs[i][j] = 1 + scs[i - 1][j - 1];
      } else {
        scs[i][j] = Math.max(scs[i][j - 1], scs[i - 1][j]);
      }
    }
  }
  console.log(scs[m][n]);

  let i = m,
    j = n,
    s = "";
  while (i > 0 && j > 0) {
    if (str1[i - 1] == str2[j - 1]) {
      s = s + str1[i - 1];
      i--;
      j--;
    } else {
      if (scs[i][j - 1] > scs[i - 1][j]) {
        s = s + str2[j - 1];
        j--;
      } else {
        s = s + str1[i - 1];
        i--;
      }
    }
  }
  while (i > 0) {
    s = s + str1[i - 1];
    i--;
  }
  while (j > 0) {
    s = s + str2[j - 1];
    j--;
  }

  result = s.split("").reverse().join("");
  console.log(result);
  return result;
};

let s1 = "AGGTAB",
  s2 = "GXTXAYB";
shortestCommonSupersequence(s1, s2);
