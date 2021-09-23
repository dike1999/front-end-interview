/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let flag = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      flag = mid;
      break;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  if (flag === -1) {
    return [-1, -1];
  }

  left = right = flag;
  while (nums[left - 1] === target) {
    left--;
  }
  while (nums[right + 1] === target) {
    right++;
  }
  return [left, right];
};
