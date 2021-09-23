/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  odd = nums.filter((item) => item % 2 === 1);
  even = nums.filter((item) => item % 2 === 0);
  return odd.concat(even);
};

let nums = [3, 2, 1, 5, 4];
console.log(exchange(nums));
