/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n < 2) {
    return n;
  }
  let dp1 = 0;
  let dp2 = 1;
  for (let i = 2; i <= n; i++) {
    [dp1, dp2] = [dp2, dp2 + dp1];
  }
  return dp2;
};
