/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  if (nums2.length < nums1.length) {
    [nums1, nums2] = [nums2, nums1];
  }
  let nums1Set = new Set(nums1);
  let res = new Set();
  for (let i = nums2.length; i >= 0; i--) {
    nums1Set.has(nums2[i]) && res.add(nums2[i]);
  }

  return [...res];
};

let nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];
let res = intersection(nums1, nums2);
console.log(res);
