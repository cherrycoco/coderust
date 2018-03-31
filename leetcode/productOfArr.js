// 238. Product of Array Except Self

// Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Solve it without division and in O(n).

// For example, given [1,2,3,4], return [24,12,8,6].

// Follow up:
// Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)

// O(n ^ 2)
var productExceptSelf = function(nums) {
  let result = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    let product = 1; 
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        product *= nums[j];
      }
    }
    result[i] = product;
    product = 1;
  }

  return result;
};

// O(n)

var productExceptSelf = function(nums) {
  let result = new Array(nums.length);
  result[0] = 1;

  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  let right = nums[nums.length - 1]; 
  for (let i = nums.length - 2; i >= 0; i--) {
    result[i] = result[i] * right;
    right = right * nums[i];
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4, 0]));