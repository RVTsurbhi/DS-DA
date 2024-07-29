/**
 * Longest Substring Without Repeating Characters
 * Given a string s, find the length of the longest substring without repeating characters.
 * 
 * 
    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.

    Input: s = "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.
 */

var longestSubstring = function (str, k) {
  let i = 0,
    j = 0,
    maxLength = 0,
    map = new Map(),
    n = str.length;

  while (j < n) {
    if (!map.has(str[j])) {
      map.set(str[j], { val: 1 });
    } else {
      map.get(str[j]).val++;
    }

    if (map.size < k) {
      j++;
    }
    if (map.size == k) {
      //ans
      maxLength = Math.max(maxLength, j - i + 1);
      j++;
    } else if (map.size > k) {
      //remove cal of i
      while (map.size > k) {
        map.get(str[i]).val--;
        if (map.get(str[i]).val == 0) {
          map.delete(str[i]);
        }
        i++;
      }

      j++;
    }
  }

  console.log(maxLength);
  return maxLength;
};

// let str = "aabacbebebe",
//   k = 3;
// Output: 7
let str = "aabbcc",
  k = 2;
// Output: 4

longestSubstring(str, k);
