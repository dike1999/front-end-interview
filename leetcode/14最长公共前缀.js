/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let res = '';
  if (!strs.length) {
    return res;
  }
  for (let j = 0; j < strs[0].length; j++) {
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][j] !== strs[0][j]) {
        return res;
      }
    }
    res += strs[0][j];
  }
  return res;
};

let strs = ['flower', 'flow', 'flight'];
console.log(longestCommonPrefix(strs));
