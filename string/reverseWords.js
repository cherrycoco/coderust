const reverseWords = (string) => {
  return string.split(' ').reverse().join(' ');
}

console.log(reverseWords("The quick brown fox jumped over the lazy dog."));