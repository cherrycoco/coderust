// const fibonacciIterative = (num) => {
//   let num1 = 1;
//   let num2 = 1;
//   let temp;

//   let i = 2; 

//   if (num === 1 || num === 2) {
//     return 1;
//   }

//   while (i < num) {
//     temp = num2 + num1;
//     num1 = num2;
//     num2 = temp;
//     i++;
//   }

//   return num2;
// }

// console.log(fibonacciIterative(6));

// const fibonacciRecursive = (n) => {
//   if (n === 1 || n === 2) {
//     return 1;
//   }

//   return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
// }

// console.log(fibonacciRecursive(6));

const fibonacciRecursiveMemo = (n, memo = {}) => {
  if (n === 1 || n === 2) {
    return 1;
  }
  console.log(memo);

  if (memo[n]) {
    return memo[n];
  }

  return memo[n] = fibonacciRecursiveMemo((n - 1), memo) + fibonacciRecursiveMemo((n - 2), memo)
}

console.log(fibonacciRecursiveMemo(4));