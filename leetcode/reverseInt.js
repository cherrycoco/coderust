// 7. Reverse Integer

// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output:  321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

var reverse = function(x) {
  let str = x.toString().split('').reverse().join('');

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== 0) {
      str = str.slice(i);
      break;
    }
  }

  if (str[str.length - 1] === '-') {
    str = str.slice(0, str.length - 1);
    str = (Number(str) * -1).toString(2);
    return str.length > 32 ? 0 : parseInt(str, 2)
  } else {
    str = Number(str).toString(2);
    return str.length >= 32 ? 0 : parseInt(str, 2);
  }
};

console.log(reverse(-2147483412));