/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let result = parseInt(x.toString().split('').reverse().join(''));
  result = x < 0 ? -result : result;
  if (result > 2 ** 31 - 1 || result < (-2) ** 31) {
    return 0;
  }
  return result;
};

console.log(reverse(-123));
