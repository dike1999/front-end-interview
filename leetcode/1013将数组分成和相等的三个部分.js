/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
  let count = arr.reduce((prev, next) => {
    return prev + next;
  });
  if (count % 3 != 0) {
    return false;
  }
  count = count / 3;
  let num = 0,
    time = 0;
  for (let i = 0; i < arr.length; i++) {
    num += arr[i];
    if (num === count) {
      num = 0;
      time++;
    }
    if (time === 3) {
      return true;
    }
  }
  return false;
};

let arr = [0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1];
let arr2 = [0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1];
console.log(canThreePartsEqualSum(arr2));
