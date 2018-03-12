// Given a roman numeral, convert it to an integer.

//Input is guaranteed to be within the range from 1 to 3999.

//https://leetcode.com/problems/roman-to-integer/description/

var romanToInt = function(s) {
  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    let current = roman[s[i]];
    let next = roman[s[i + 1]];
    if (next > current) {
      sum += (next - current);
      i++;
    } else {
      sum += current;
    }
  }

  return sum;
};

console.log(romanToInt('MCMLVIII'));
