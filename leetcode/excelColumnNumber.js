// Related to question Excel Sheet Column Title

// Given a column title as appear in an Excel sheet, return its corresponding column number.

// For example:

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28 


//https://leetcode.com/problems/excel-sheet-column-number/description/

var titleToNumber = function(s) {
  let end = parseInt(s[s.length - 1], 36) - 9;
  let col;

  s.length > 1 ? col = 1 : col = 0;

  for (let i = s.length - 2; i >= 0; i--) {
    col *= (parseInt(s[i], 36) - 9) * 26;
  }

  return col + end;
};

console.log(titleToNumber('AB'));