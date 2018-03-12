// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

const majorityElement = (nums) => {
  let n = nums.length;
  let count = {};

  for (let num of nums) {
    count[num] ? count[num]++ : count[num] = 1;
  }

  for (let key in count) {
    if (count[key] > n / 2) {
      return key;
    } 
  }
}

