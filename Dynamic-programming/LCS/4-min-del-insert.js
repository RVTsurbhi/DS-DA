/**
 * Minimum number of deletions and insertions to transform one string into another
 * Given two strings ‘str1’ and ‘str2’ of size m and n respectively. The task is to remove/delete and insert the minimum number of 
 * characters from/in str1 to transform it into str2. It could be possible that the same character needs to be 
 * removed/deleted from one point of str1 and inserted at some another point.
 * 
 * Input : 
    str1 = "heap", str2 = "pea" 
    Output : 
    Minimum Deletion = 2 and
    Minimum Insertion = 1
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let m = word1.length;
    let n = word2.length;
    // if( word1 == word2){
    //     return 0;
    // }
    let lcs = new Array(m + 1);
  
    for (let i = 0; i < m + 1; i++) {
      lcs[i] = new Array(n + 1);
      for (j = 0; j <= n + 1; j++) {
        if (i == 0 || j == 0) {
          lcs[i][j] = 0;
        }
      }
    }
  
    for (let i = 1; i < m + 1; i++) {
      for (j = 1; j <= n + 1; j++) {
        if (word1[i - 1] == word2[j - 1]) {
          lcs[i][j] = 1 + lcs[i - 1][j - 1];
        } else {
          lcs[i][j] = Math.max(lcs[i][j - 1], lcs[i - 1][j]);
        }
      }
    }
    //  return n+m-2*lcs[m][n];
    // return lcs[m][n];
  
    let minDeletion = m - lcs[m][n];
    let minInsertion = n - lcs[m][n];
  
    let obj = {
      minDeletion,
      minInsertion,
    };
  
    console.log(obj);
    return obj;
  };
  
  let str1 = "heap",
    str2 = "pea";
  minDistance(str1, str2);
  