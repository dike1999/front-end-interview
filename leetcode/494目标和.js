/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let sum = nums.reduce((sum, num) => (sum += num));
  let diff = sum - target;
  if (diff < 0 || diff % 2 != 0) {
    return 0;
  }
  let neg = Math.floor(diff / 2);
  const dp = new Array(neg + 1).fill(0);
  dp[0] = 1;
  for (const num of nums) {
    for (let j = neg; j >= num; j--) {
      dp[j] += dp[j - num];
    }
  }
  return dp[neg];
};

let nums = [1, 1, 1, 1, 1],
  target = 3;
console.log(findTargetSumWays(nums, target));
