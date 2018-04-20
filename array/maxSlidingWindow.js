// const maxSlidingWindow = (arr, w) => {
//   let result = [];
//   let window = [arr[0]];
//   if (w > arr.length) {
//     return [Math.max(arr)];
//   }
  
//   for (let i = 1; i < arr.length; i++) {
//     let val = arr[i];
//     if (i < w) {
//       window = addToWindow(window, val);
//     } else {
//       result.push(window[0]);
//       let remove = arr[i - w];
//       if (remove === window[0]) {
//         window.shift();
//       }
//       window = addToWindow(window, val);
//     }
//   }

//   result.push(window[0]);
//   return result;
// }

// const addToWindow = (window, val) => {
//   if (window.length === 0) {
//     window.push(val);
//   } else if (window.length === 1) {
//     if (val > window[0]) {
//       window = [val];
//     } else {
//       window[1] = val;
//     }
//   } else {
//     if (val > window[0]) {
//       window = [val];
//     } else if (val > window[1]) {
//       window[1] = val;
//     }
//   }

//   return window;
// }

const maxSlidingWindow = (arr, num) => {
  let result = [];
  let window = [arr[0]];

  for (let i = 1; i < num; i++) {
    while (arr[i] > window[window.length - 1]) {
      window.pop();
    }

    window.push(arr[i]);
  }

  result.push(window[0]);
  for (let i = 1; i < arr.length - num + 1; i++) {
    if (arr[i - 1] === window[0]) {
      let k = window.shift();
    }

    while (arr[i + num - 1] > window[window.length - 1]) {
      window.pop();
    }

    window.push(arr[i + num - 1]);
    result.push(window[0]);
  }

  return result;
}


console.log(maxSlidingWindow([2, 4, -1, 7, -4, -2], 2));