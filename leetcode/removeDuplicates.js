// 26. Remove Duplicates from Sorted Array

// Given a sorted array, remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Example:

// Given nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
// It doesn't matter what you leave beyond the new length.

var removeDuplicates = function(nums) {
  let slow = 0;
  let fast = 1;

  while (nums[fast] !== undefined) {
    if (nums[fast] === nums[slow]) {
      fast++;
    } else {
      slow++;
      nums[slow] = nums[fast];
      fast++;
    }
  }

  return nums.slice(0, slow + 1);
};

console.log(removeDuplicates([0, 0, 0, 3]));