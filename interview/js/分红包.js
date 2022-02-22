function shuffle(arr) {
  let i = arr.length;
  let res = [...arr];
  while (i) {
    let j = Math.floor(Math.random() * i--);
    [res[i], res[j]] = [res[j], res[i]];
  }
  return res;
}

/**
 * 1. 获取红包的份额不能超过一个阈值
 * 2. 每个人至少抢到1分钱
 * 3. 所有人抢到的金额之和要等于红包金额，不能多也不能少
 * @param {Number} money 总额
 * @param {Number} count 人数
 * @param {Number} min 最小值
 * @param {Number} limit 阈值
 * @returns
 */
function randomRedPackage(money, count, min = 0.01, limit = 0.618) {
  if (limit < 0 || limit > 1) {
    throw new TypeError(
      "range of limit's value is wrong, it's value expect in range of [0, 1]"
    );
  }

  let result = [];
  for (let i = 0; i < count - 1; i++) {
    const value = parseFloat(
      (Math.random() * (money * limit - min) + min).toFixed(2)
    );
    result.push(value);
    money -= value;
  }
  result.push(parseFloat(money.toFixed(2)));
  return shuffle(result);
}

const arr = randomRedPackage(10, 10);
const sum = arr.reduce((pre, cur) => pre + cur, 0);
console.log(arr);
console.log(sum);
