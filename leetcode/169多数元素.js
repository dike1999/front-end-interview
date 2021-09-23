/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let stack = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    // 如果栈空，则直接入栈，跳过此轮循环
    if (stack.length === 0) {
      stack.push(nums[i]);
      continue;
    }
    // 相等入栈，不相等出栈
    if (stack[stack.length - 1] === nums[i]) {
      stack.push(nums[i]);
    } else {
      stack.pop();
    }
  }
  return stack.pop();
};

function majorityElement2(nums) {
  let mid = Math.floor(nums.length / 2);
  let map = new Map();
  for (let num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
    if (map.get(num) > mid) {
      return num;
    }
  }
  return 0;
}

let test1 = [2, 2, 1, 1, 1, 2, 2];
let test2 = [3, 2, 3];
let test3 = [6, 5, 5];
console.log(majorityElement2(test1));
