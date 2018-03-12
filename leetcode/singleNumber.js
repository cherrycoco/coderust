// Given an array of integers, every element appears twice except for one. Find that single one.

// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

var singleNumber = function(nums) {
  let count = {};

  for (let num of nums) {
    count[num] ? count[num] += 1 : count[num] = 1;
  }

  for (let key in count) {
    if (count[key] === 1) {
      return Number(key);
    }
  }
};

