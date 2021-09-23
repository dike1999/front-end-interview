/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  return n.toString(2).replace(/0/g, "").length === 1 ? true : false;
};

let n1 = 30;
let n2 = 32;
console.log(isPowerOfTwo(n1));
console.log(isPowerOfTwo(n2));
