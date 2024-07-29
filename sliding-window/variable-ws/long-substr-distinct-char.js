/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let i = 0,
    j = 0,
    map = new Map(),
    maxlength = 0;

  while (j < s.length) {
    if (!map.has(s[j])) {
      map.set(s[j], { val: 1 });
    } else {
      map.get(s[j]).val++;
    }

    if (map.size == j - i + 1) {
      //candidate ans
      maxlength = Math.max(maxlength, j - i + 1);
      j++;
    } else if (map.size < j - i + 1) {
      //remove cal of i
      while (map.size < j - i + 1) {
        map.get(s[i]).val--;
        if (map.get(s[i]).val == 0) {
          map.delete(s[i]);
        }
        i++;
      }
      j++;
    }
  }
  console.log(maxlength);
  return maxlength;
};

lengthOfLongestSubstring("abcabcbb");
