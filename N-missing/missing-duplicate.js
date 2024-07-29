/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let missingNum = 0;
  let duplicateNum = 0;
  let i = 0;
  n = nums.length;
  while (i < n) {
    if (nums[i] != nums[nums[i] - 1]) {
      swap(nums, i, nums[i] - 1);
    } else {
      i++;
    }
  }

  for (let j = 0; j < n; j++) {
    if (nums[j] != j + 1) {
      missingNum = j + 1;
      duplicateNum = num[j];
    }
  }

  console.log(missingNum, duplicateNum);
  return missingNum, duplicateNum;
};

let arr = [2, 3, 1, 8, 2, 3, 5, 1];
missingNumber(arr);
