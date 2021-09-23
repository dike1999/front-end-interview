/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let slow = -1;
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      slow++;
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
    }
  }
};
