/**
 * 给定数组['1a','2b','13c','5a']
 * 数组元素的格式是一个数字（可能多位）前缀与一个字母的组合
 * 输出出现次数最多的字母对应的前缀数字之和
 */
// 测试用例
const test = ["1a", "2b", "13c", "5a"];

function func(arr) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let letter = arr[i].substring(arr[i].length - 1);
    let num = parseInt(arr[i].substring(0, arr[i].length - 1));
    if (!map.has(letter)) {
      // 如果这个字符串中的字母还没作为键存储在哈希表中，就它加进去
      map.set(letter, [1, num]);
    } else {
      // 否则出现次数+1，前缀数字之和也要改变
      const arr = map.get(letter);
      arr[0]++;
      arr[1] += num;
      map.set(letter, arr);
    }
  }
  let maxCount = 0,
    res;
  for (let [key, value] of map) {
    if (value[0] > maxCount) {
      maxCount = value[0];
      res = [key, value[1]];
    }
  }
  return res;
}

console.log(func(test));
