function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let flag = false;
  let mid;
  while (left <= right) {
    mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] === target) {
      flag = true;
      break;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  while (nums[mid - 1] === target) {
    mid--;
  }
  return flag ? mid : -1;
}

let nums = [-1, 0, 3, 4, 5, 5, 9, 12];
let target = 5;
console.log(search(nums, target));
