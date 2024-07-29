/**
 *  Minimum number of deletions to make a string palindrome
 * Given a string of size ‘n’. The task is to remove or delete the minimum number of characters from the string 
 * so that the resultant string is a palindrome. 
 * Note: The order of characters should be maintained. 
 * Input : aebcbda
    Output : 2
    Remove characters 'e' and 'd'
    Resultant string will be 'abcba'
    which is a palindromic string
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  let str2 = "";

  //reverse str
  str2 = s.split("").reverse().join("");
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

  console.log(s.length - lps[m][m]);
  return s.length - lps[m][m];
};
