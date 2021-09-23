Array.prototype.myFlat = function () {
  let stack = [...this]; // 获得调用myFlat函数的数组
  let result = [];
  while (stack.length) {
    const first = stack.shift();
    if (Array.isArray(first)) {
      stack.unshift(...first);
    } else {
      result.push(first);
    }
  }
  return result;
};

// flat方法
const arr = [
  1,
  2,
  3,
  4,
  [1, 2, 3, [1, 2, 3, [1, 2, 3]]],
  5,
  "string",
  { name: "前端收割机" },
];
console.log(arr.myFlat());
