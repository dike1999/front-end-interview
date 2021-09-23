/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) {
  let res = [];
  for (let i = 2; i <= n; i++) {
    res = (res + m) % i;
  }
  return res;
};

console.log(lastRemaining(5, 3));
