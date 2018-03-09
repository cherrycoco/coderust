var merge = function(nums1, m, nums2, n) {
  let insertIdx = m + n - 1;
  let p1 = m - 1;
  let p2 = n - 1;

  while (insertIdx >= 0) {
    if (p2 < 0) {
      break;
    }

    if (p1 >= 0) {
      if (nums1[p1] >= nums2[p2]) {
        nums1[insertIdx] = nums1[p1];
        p1--;
      }else if (nums1[p1] <= nums2[p2]) {
        nums1[insertIdx] = nums2[p2];
        p2--;
      }
    } else {
      nums1[insertIdx] = nums2[p2];
      p2--;
    }

    insertIdx--;
  }


  return nums1;
};

console.log(merge([1, 2, 3], 3, [2, 5, 6], 3));