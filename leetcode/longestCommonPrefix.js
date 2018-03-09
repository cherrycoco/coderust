// var longestCommonPrefix = function(strs) {

//   if (strs.length === 0) {
//     return '';
//   }

//   let prefix = strs[0];
//   for (let i = 1; i < strs.length; i++) {
//     while (strs[i].indexOf(prefix) !== 0) {
//       prefix = prefix.slice(0, prefix.length - 1);

//       if (prefix.length === 0) {
//         return '';
//       }
//     }
//   }

//   return prefix;
// };

var longestCommonPrefix = function(strs) {

  if (strs.length === 0) {
    return '';
  }

  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char || strs[j].length === i) {
        return strs[0].slice(0, i);
      }
    }
  }

  return strs[0];
};

console.log(longestCommonPrefix(['dance', 'dan', 'dan']));