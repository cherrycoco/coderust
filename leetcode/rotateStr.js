var rotateString = function(A, B) {
  let startIdx; 

  for (let i = 0; i < A.length; i++) {
    if (B.indexOf(A.slice(i)) === 0) {
      startIdx = i;
      diff = A.length - startIdx;
      break;
    }
  }

  for (let i = 0; i < B.length; i++) {

    if (startIdx === B.length) {
      startIdx = 0;
    }
    if (B[i] === A[startIdx]) {
      startIdx++;
    } else {
      return false;
    }
  }

  return true;
};

console.log(rotateString("abcde", "deabc"))
