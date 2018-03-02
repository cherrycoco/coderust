const largestSumSubarray = (arr) => {
  let globalMax = arr[0];
  let currentMax = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    let num = arr[i];
    
    if (currentMax + num > num) {
      currentMax = currentMax + num;
    } else {
      currentMax = num;
    }

    if (currentMax > globalMax) {
      globalMax = currentMax;
    } 
  }

  return globalMax;
}

console.log(largestSumSubarray([1, 2, -4, -3, 5, 7]));