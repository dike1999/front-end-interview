/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  if (n <= 1) {
    return 1;
  }
  let dp1 = 1;
  let dp2 = 1;
  for (let i = 2; i <= n; i++) {
    [dp1, dp2] = [dp2, (dp1 + dp2) % (1e9 + 7)];
  }
  return dp2;
};
