//basic hash function
//problems : 1. only hashes strings
//2.not constant time(if take large string, it will take time to hash it)
// 3. could be little more random
function hashBasic(str, arrLength) {
  let total = 0;
  for (let char of str) {
    // map "a" to 1, "b" to 2, "c" to 3..so on
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrLength;
  }
  return total;
}

//better than 1st
//speed up as we are looping max to 100 if str length greater than 100
//reduce collisions using prime
function hashBasic2(str, arrLength) {
  let total = 0;
  let prime = 31;
  for (let i = 0; i < Math.min(str.length, 100); i++) {
    let char = str[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * prime + value) % arrLength;
  }
  return total;
}

//Better solution using GET and SEt method
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * prime + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let index = this._hash(key);
    //return index;
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    //if key not found
    return undefined;
  }
  //to fetch all keys and values and remove duplicacy
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

let ht = new HashTable(13);
ht.set("skirt", "summer clothes");
ht.set("jacket", "winter clothes");
ht.set("wedges", "footwears");
ht.set("headband", "accessories");
ht.set("hair clips", "accessories");

ht.set("jacket", "summer clothes");
