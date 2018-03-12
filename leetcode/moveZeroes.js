// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

const moveZeroes = (nums) => {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    num === 0 ? count++ : nums[i - count] = num;
  }

  while (count > 0) {
    nums[nums.length - count] = 0;
    count--;
  }

  return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12]))