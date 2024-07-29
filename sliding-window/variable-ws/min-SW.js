/**
 * Minimum Window Substring
 * Given two strings s and t of lengths m and n respectively, return the minimum window substring
 * of s such that every character in t (including duplicates) is included in the window.
 * If there is no such substring, return the empty string "".
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s.length < t.length) return "";
  let str = "";
  let map = new Map();
  for (let i = 0; i < t.length; i++) {
    if (map.has(t[i])) {
      map.get(t[i]).val++;
    } else {
      map.set(t[i], { val: 1 });
    }
  }

  let i = 0,
    j = 0,
    count = map.size;
  while (j < s.length) {
    if (map.has(s[j])) {
      map.get(s[j]).val--;

      if (map.get(s[j]).val == 0) {
        count--;
      }

      if (count == 0) {
        while (count == 0) {
          //ans
          if (str == "" || str.length > j - i + 1) {
            str = s.substr(i, j - i + 1);
          }
          //cal for i
          if (map.has(s[i])) {
            map.get(s[i]).val++;
            if (map.get(s[i]).val > 0) {
              count++;
            }
          }
          i++;
        }
      }
    }
    j++;
  }

  return str;
};
