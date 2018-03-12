// 217. Contains Duplicate

// Given an array of integers, find if the array contains any duplicates. 
// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

var containsDuplicate = function(nums) {
  let map = {};

  for (let num of nums) {
    if (map[num]) {
      return true;
    } else {
      map[num] = 1;
    }
  }

  return false;
};