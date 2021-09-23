/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n < 2) {
    return 1;
  }
  let dp1 = 1; // 0阶
  let dp2 = 1; // 1阶
  for (let i = 2; i <= n; i++) {
    [dp1, dp2] = [dp2, dp1 + dp2];
  }
  return dp2;
};

var climbStairs1 = function (n) {
  if (n < 2) {
    return 1;
  }
  return climbStairs1(n - 1) + climbStairs1(n - 2);
};

console.log(climbStairs(5));
