//count occurences of anagram

const anagramsOccurences = (str1, str2) => {
  let map = new Map();
  let k = str2.length;

  //   map.set('apples', {val: 1})
  // map.get('apples').val++
  // myMap.set('b', myMap.get('b') + 1);
  for (let i = 0; i < str2.length; i++) {
    if (map.has(str2[i])) {
      map.get(str2[i]).val++;
      // map.set(str2[i], map.get(str2[i]) + 1);
    } else {
      map.set(str2[i], { val: 1 });
      // map.set(str2[i], 1);
    }
  }
  console.log("map", map);

  let i = 0,
    j = 0;
  let count = map.size;
  console.log("count", count);
  let result = 0;

  //   let a = "aabaabaa";
  // let b = "aaba";
  while (j < str1.length) {
    console.log(j, str1[j]);
    if (map.has(str1[j])) {
      map.get(str1[j]).val--;
      // map.set(str1[j], map.get(str1[j]) - 1);
      //check if val of that element is 0, if yes then dec the count
      console.log("map", map);
      if (map.get(str1[j]).val == 0) {
        count--;
        console.log("count2", count);
      }
    }

    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 == k) {
      if (count == 0) {
        result++;
        console.log("result", result);
      }
      if (map.has(str1[i])) {
        console.log("val of ", str1[i]);
        map.get(str1[i]).val++;
        // map.set(str1[i], map.get(str1[i]) + 1);

        if (map.get(str1[i]).val == 1) {
          count++;
        }
      }

      i++;
      j++;
    }
  }
  console.log(result);
  return result;
};

let a = "aabaabaa";
let b = "aaba";
anagramsOccurences(a, b);
