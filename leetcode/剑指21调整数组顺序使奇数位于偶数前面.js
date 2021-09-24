/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    while (left < right && nums[left] % 2 == 1) {
      left++;
    }
    while (left < right && nums[right] % 2 == 0) {
      right--;
    }
    [nums[left], nums[right]] = [nums[right], nums[left]];
  }
  return nums;
};

let nums = [3, 2, 1, 5, 4];
console.log(exchange(nums));
