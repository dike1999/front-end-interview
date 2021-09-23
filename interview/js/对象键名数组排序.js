/**
 * 给定一个对象，其中存储了世界富豪的名字(key)和资产(value)
 * 求排行榜（输出一个数组，其中是富豪的名字，按他们的资产从大到小排序）
 * 例如输入{bill:500,sam:480,roark:501}，返回['roark','bill','sam']
 */

//测试用例
const test = { bill: 500, sam: 480, roark: 501, tom: 999 };

function func(obj) {
  // Object.keys()方***返回一个由一个给定对象的自身可枚举属性组成的数组
  // 数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致
  const arr = Object.keys(obj);
  return arr.sort((a, b) => obj[b] - obj[a]);
  /*
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (obj[arr[j]] < obj[arr[j + 1]]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
  */
}

console.log(func(test));
