/**
 * 给定一个整数数组，判断是否存在重复元素。
 * 如果存在一值在数组中出现至少两次，函数返回 true 。
 * 如果数组中每个元素都不相同，则返回 false 。
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate1 = function (nums) {
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }
  return false;
};

var containsDuplicate2 = function (nums) {
  let setSize = new Set(nums).size;
  return setSize === nums.length ? false : true;
};

let test1 = [1, 2, 3, 1];
let test2 = [1, 2, 3, 4];
let test3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

console.log(containsDuplicate2(test1));
console.log(containsDuplicate2(test2));
console.log(containsDuplicate2(test3));
