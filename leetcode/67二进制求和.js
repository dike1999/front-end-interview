/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let ans = "";
  let ca = 0;
  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    let sum = ca;
    if (i >= 0) {
      sum += parseInt(a[i]);
    }
    if (j >= 0) {
      sum += parseInt(b[j]);
    }
    ans += sum % 2;
    ca = Math.floor(sum / 2);
  }

  if (ca === 1) {
    ans += 1;
  }
  return ans.split("").reverse().join("");
};

let a = "11";
let b = "1";
console.log(addBinary(a, b));
