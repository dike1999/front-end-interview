/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let res = "";
  while (columnNumber) {
    const num = columnNumber % 26 ? columnNumber % 26 : 26; // 取模；0则取26
    res = String.fromCharCode(num + 65 - 1) + res; // 获取A-Z字符串
    columnNumber = parseInt((columnNumber - num) / 26); //取余
  }
  return res;
};
