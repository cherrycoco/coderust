// Given an unsorted array of integers, find the length of longest increasing subsequence.

// For example,
// Given [10, 9, 2, 5, 3, 7, 101, 18],
// The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4. Note that there may be more than one LIS combination, it is only necessary for you to return the length.

// Your algorithm should run in O(n2) complexity.

// Follow up: Could you improve it to O(n log n) time complexity?

const lengthOfLIS = (nums) => {
  let result = [];
  let temp = [];

  for (let i = 0; i < nums.length; i++) {
    temp.push(nums[i]);
    for (let j = i + 1; j <= nums.length; j++) {
      if (nums[j] > temp[temp.length - 1]) {
        temp.push(nums[j]);
      } else {
        result.push(temp.slice());
        while (temp[temp.length - 1] >= nums[j]) {
          temp.pop();
        } 
        temp.push(nums[j]);
      }
    }
    temp = [];
  }
  
  let count = 0;
  for (let i = 0; i < result.length; i++) {
    if (result[i].length > count) {
      count = result[i].length;
    }
  }

  console.log(result)
  return count;
};

console.log(lengthOfLIS([1,3,6,7,9,4,10,5,6]));