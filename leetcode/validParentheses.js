// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

const validParentheses = (s) => {
  let parens = {
    '(': ')',
    '{': '}',
    '[': ']',
    ')': 'close',
    '}': 'close',
    ']': 'close'
  }
  
  let stack = [];

  for (let char of s) {
    if (parens[char]) {
      if (parens[char] === 'close') {
        if (stack[stack.length - 1] === char) {
          stack.pop();
        } else {
          return false;
        }
      } else {
        stack.push(parens[char]);
      }
    }
  }
  
  return stack.length === 0 ? true : false;
}

console.log(validParentheses('({o})]'));