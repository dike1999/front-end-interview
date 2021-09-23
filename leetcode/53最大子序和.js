/**
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组
 * （子数组最少包含一个元素），返回其最大和。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let pre = 0,
    res = nums[0];
  for (const num of nums) {
    if (pre > 0) {
      pre += num;
    } else {
      pre = num;
    }
    res = Math.max(pre, res);
  }
  return res;
};
// 动态规划：若前一个元素大于0，则将其加到当前元素上。最后返回数组最大值

let test1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(test1));
