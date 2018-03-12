var bestRotation = function(arr) {
  let score = {};
  let rotatedIdx;
  let largestIdx;
  let largest;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num > arr.length - 1) {
      break;
    }
    for (let k = 0; k < arr.length; k++) {

      rotatedIdx = i - k;

      if (rotatedIdx < 0) {
        rotatedIdx = arr.length + rotatedIdx;
      }

      if (score[k] === undefined) {
        num <= rotatedIdx ? score[k] = 1 : score[k] = 0;
      } else {
        num <= rotatedIdx ? score[k] += 1 : score[k];
      }
    }
  }

  for (let key in score) {
    if (score[key] > largest || largest === undefined) {
      largestIdx = Number(key);
      largest = score[key];
    }
  }

  return largestIdx;
};

console.log(bestRotation([2, 3, 1, 4, 0]));