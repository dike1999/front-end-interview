/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];
  const backstack = (path) => {
    if (path.length === nums.length) {
      res.push(path);
      return;
    }
    nums.forEach((n) => {
      if (path.includes(n)) {
        return;
      }
      backstack(path.concat(n));
    });
  };
  backstack([]);
  return res;
};

let nums = [1, 2, 3];
let result = permute(nums);
console.log(result);
