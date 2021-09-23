/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  function backtracking(n, k, used) {
    if (path.length === k) {
      res.push(Array.from(path));
      return;
    }
    for (let i = 0; i < k; i++) {
      if (used[i]) {
        continue;
      }
      path.push(n[i]);
      used[i] = true; // 同支
      backtracking(n, k, used);
      path.pop();
      used[i] = false;
    }
  }
  const res = [],
    path = [];
  backtracking(nums, nums.length, []);
  return res;
};

let nums = [1, 2, 3];
let result = permute(nums);
console.log(result);
