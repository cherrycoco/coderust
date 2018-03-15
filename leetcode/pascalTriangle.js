// 118. Pascal's Triangle

// Given numRows, generate the first numRows of Pascal's triangle.

// For example, given numRows = 5,
// Return

// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

function wrapper () {
  let cache = {}

  var generate = function(numRows) {
    let result = [];

    for (let i = 1; i <= numRows; i++) {
      let row = [];
      let prevRow = result[result.length - 1];
      for (let j = 0; j < i; j++) {
        if (j === 0 || j === i - 1) {
          row.push(1);
        } else {
          row.push(prevRow[j - 1] + prevRow[j]);
        }
      }
      result.push(row);
    }

    return result; 
  };

  return generate; 
};

let generate = wrapper();

console.log(generate(5));