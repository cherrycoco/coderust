// 202. Happy Number

// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Example: 19 is a happy number

// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1


// var isHappy = function(n, cache = {}) {
//   let str = n.toString();
//   let sum = 0;

//   for (let char of str) {
//     sum += char**2;
//   }

//   if (cache[sum]) {
//     return false;
//   } 

//   if (sum === 1) {
//     return true;
//   } else {
//     cache[sum] = true;
//     return isHappy(sum, cache);
//   }
// };

// console.log(isHappy(2));
var memoizeHappy = function () {
  let cache = {};

  var isHappy = function(n) {
    let str = n.toString();
    let sum = 0;
  
    for (let char of str) {
      sum += char**2;
    }
  
    if (cache[sum]) {
      return false;
    } 
  
    if (sum === 1) {
      return true;
    } else {
      cache[sum] = true;
      return isHappy(sum);
    }
  };

  return isHappy;
}

let isHappy = memoizeHappy();

console.log(isHappy(2));



