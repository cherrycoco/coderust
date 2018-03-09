var strStr = function(haystack, needle) {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let subStr = haystack.substring(i, i + needle.length);
    console.log(subStr)
    if (subStr === needle) {
      return i;
    }
  }

  return -1;
};

console.log(strStr('hello', 'll'));