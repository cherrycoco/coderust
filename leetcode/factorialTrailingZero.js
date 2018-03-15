// 172. Factorial Trailing Zeroes

// Given an integer n, return the number of trailing zeroes in n!.

// Note: Your solution should be in logarithmic time complexity.

// recursion 

var trailingZeroes = function(n) {

  const factorial = (k) => {
    return (k === 1) ? 1 : factorial(k - 1) * k;
  }

  let num = factorial(n);
  let str = num.toString();
  let count = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === '0') {
      count++;
    } else {
      return count;
    }
  }
};

// iterative
// var trailingZeroes = function(n) {
//   let sum = 1; 
//   if (n === 0) return 1;

//   while (n > 0) {
//     sum *= n; 
//     n--; 
//   }

//   let str = sum.toString();
//   let count = 0;

//   for (let i = str.length - 1; i >= 0; i--) {
//     if (str[i] === '0') {
//       count++;
//     } else {
//       return count;
//     }
//   }
// };

console.log(trailingZeroes(30));