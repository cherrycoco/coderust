// const largestSumSubarray = (arr) => {
//   let globalMax = arr[0];
//   let currentMax = arr[0];
  
//   for (let i = 1; i < arr.length; i++) {
//     let num = arr[i];
    
//     if (currentMax + num > num) {
//       currentMax = currentMax + num;
//     } else {
//       currentMax = num;
//     }

//     if (currentMax > globalMax) {
//       globalMax = currentMax;
//     } 
//   }

//   return globalMax;
// }

const largestSumSubarray = (arr) => {
  let globalMax = arr[0];
  let globalStart= 0;
  let globalEnd = 0;
  let localStart = 0;
  let localEnd = 0;
  let maxArray = new Array(arr.length);
  maxArray[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let localMax = Math.max(arr[i], (arr[i] + maxArray[i - 1]));
    maxArray[i] = localMax;

    if (localMax === arr[i]) localStart = i;
    localEnd = i;

    if (localMax > globalMax) {
      globalMax = localMax;
      globalStart = localStart;
      globalEnd = localEnd; 
    }
  }

  return [globalStart, globalEnd];
};

console.log(largestSumSubarray([-4, 2, -5, 1, 2, 3, 6, -5, 1]));