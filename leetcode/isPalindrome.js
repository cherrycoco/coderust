var isPalindrome = function(s) {
  let re = /\W+/;
  s = s.split(re).join('').toLowerCase();
  
  for (let i = 0; i < s.length / 2; i++) {
    let matchingChar = s[s.length - 1 - i];
    
    if (s[i] !== matchingChar) {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));