/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  return n.toString(2).replace('/0/g', "").length;
};

let test = 00000000000000000000000000001011;
console.log(hammingWeight(test));
