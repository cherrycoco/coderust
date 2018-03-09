// var mySqrt = function(x) {
//   return Math.floor(Math.sqrt(x));
// };

var mySqrt = function(x) {
  if (x === 0) return 0;
  if (x === 1) return 1;

  for (let i = 1; i < x; i++) {
    if (x / i < i) {
      return i - 1;
    }
  }
};

console.log(mySqrt(1));