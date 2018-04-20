const threeSum = (arr, target) => {
  let set = new Set;

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (set.has(arr[i])) {
        return true;
      } 
      let diff = target - arr[i] - arr[j];
      set.add(diff); 
    }
  }
  console.log(set);
  return false;
}

console.log(threeSum([3, 7, 1, 8, 4], 20));