// Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

// Example:
// Given a = 1 and b = 2, return 3.

// https://leetcode.com/problems/sum-of-two-integers/description/

const getSum = (a, b) => {
  let bitA;
  let bitB;
  let temp = new Array(8);
  temp.fill(0);

  if (a === 0) {
    return b;
  }

  if (b === 0) {
    return a;
  }
  Math.sign(a) === 1 ? bitA = a.toString(2) : bitA = (a * -1).toString(2);
  Math.sign(b) === 1 ? bitB = b.toString(2) : bitB = (b * -1).toString(2);
  bitA = ('00000000' + bitA).substr(-8);
  bitB = ('00000000' + bitB).substr(-8);

  if (Math.sign(a) === Math.sign(b)) {
    for (let i = 7; i >= 0; i--) {
      if (bitA[i] === '1' && bitB[i] === '1') {
        temp[i - 1] = 1;
        console.log(temp);
      } else if ((bitA[i] === '1' && bitB[i] === '0') || (bitA[i] === '0' && bitB[i] === '1')) {
        if (temp[i] === 1) {
          temp[i - 1] = 1;
          temp[i] = 0;
        } else {
          temp[i] = 1;
        }
      }
    }
  }

  temp = parseInt(temp.join(''), 2);
  if (Math.sign(a) === -1 && Math.sign(b) === -1) {
    return temp * -1;
  }
  return temp;
}

console.log(getSum(-15, -120));