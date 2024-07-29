//better way of time complexity O(n)
function checkFrequency2(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let freq1 = {};
    let freq2={};
    //check the frequency of each item in array
    //2 separate loops are better than 2 nested loops
    for(let item of arr1){
        freq1[item] = ++freq1[item] || 1
    }
    for (let item of arr2) {
        freq2[item] = ++freq2[item] || 1
    }
    for (let item of arr1){ //looping in arra1
        if(!(item ** 2 in freq2)){ //match keys in loop2
            return false;
        }
        if(freq2[item ** 2] !== freq1[item]){ //count values of keys
            return false;
        }
    }
    return true;
    
}

//anagrams strings
function validAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    let freq1={}
    for(let item of str1){
        freq1[item] = ++freq1[item] || 1
    }
    console.log(freq1)

    for(let i=0; i<str2.length; i++){
        let item = str2[i]
        if(!freq1[item]){
            return false;
        }else {
            freq1[item] -= 1
        }
    }
    return true;
}

//check common items from 2 array and push them in 3rd one
function commonValues(arr1, arr2){
    let commonArr = []
    let commonObj = {}
    for(let item of arr1){
        commonObj[item] = ++commonObj[item] || 1
    }
    for(let key of arr2){
        if(commonObj[key]){
            commonArr.push(key)
        }
    }

    return commonArr;
}

//Write a function called constructNote, which accepts two strings, a message and some letters. 
//The function should return true if the message can be built with the letters that you are given, or it should return false.
//Assume that there are only lowercase letters and no space or special characters in both the message and the letters.


//If M is the length of message and N is the length of letters:
//Time Complexity: O(M+N)
//Space Complexity: O(N)

function constructNote(msg, letters) {
  if (letters.length < msg.length) {
    return false;
  }
  let freq1 = {};
  for (let i = 0; i < msg.length; i++) {
    let key = msg[i];
    freq1[key] = ++freq1[key] || 1;
  }

  for (let j = 0; j < letters.length; j++) {
    let key = letters[j];
    if (freq1[key]) {
      freq1[key] -= 1;
    }
  }

  for (let key in freq1) {
    if (freq1[key]) {
      console.log(false);
      return false;
    }
  }
  return true;
}


//Given an unsorted array and a number n, find if there exists 
//a pair of elements in the array whose difference is n. 
//This function should return true if the pair exists or false if it does not.
//Time Complexity Requirement - O(n)
//Space Complexity Requirement - O(n)

function findPair(array, n) {
  const hash = {};
  for (let i = 0; i < array.length; i++) {
    if (hash[array[i]]) {
      return true;
    }
    hash[array[i] - n] = 1;
    hash[array[i] + n] = 1;
  }
  return false;
}

//The solution works on the below principle:
//if b - a = n, then b = n + a or -a = n - b

// findPair([6,1,4,10,2,4], 2) // true
// findPair([8,6,2,4,1,0,2,5,13],1) // true
// findPair([4,-2,3,10],-6) // true
// findPair([6,1,4,10,2,4], 22) // false
// findPair([], 0) // false
// findPair([5,5], 0) // true
// findPair([-4,4], -8) // true
// findPair([-4,4], 8) // true
// findPair([1,3,4,6],-2) // true
// findPair([0,1,3,4,6],-2) // true