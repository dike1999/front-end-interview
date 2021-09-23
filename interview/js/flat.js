Array.prototype.myFlat = function (num = 1) {
  if (!Number(num) || Number(num) < 0) {
    return this;
  }
  let arr = this; // 获得调用myFlat函数的数组
  while (num > 0) {
    if (arr.some((x) => Array.isArray(x))) {
      arr = [].concat.apply([], arr); // 数组中还有数组元素的话并且 num > 0，继续展开一层数组
    } else {
      break; // 数组中没有数组元素并且不管 num 是否依旧大于 0，停止循环。
    }
    num--;
  }
  return arr;
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
console.log(arr.myFlat(2));
