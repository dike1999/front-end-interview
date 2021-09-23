/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let re = "";
  if (!strs.length) {
    return re;
  }
  for (let j = 0; j < strs[0].length; j++) {
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][j] != strs[0][j]) {
        return re;
      }
    }
    re += strs[0][j];
  }
  return re;
};

let strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));
