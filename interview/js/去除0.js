//去除三个及以上相邻的0
const data = [1, 2, 0, 0, 3, 0, 0, 0, 0, 5, 2, 0, 1, 0, 0, 0];

let start = 0,
  count = 0; // start记录0开始的位置
let res = [];
for (let i = 0; i < data.length; i++) {
  if (data[i] == 0) {
    count++; // 1.遇到0
  } else {
    // 2. 遇到非0，退出本次循环 清除计数
    start = i + 1;
    count = 0;
    continue;
  }
  if (count < 3) {
    // 3.遇到0的个数小于3，退出本次循环
    continue;
  }
  // 4. 0的个数>=3, 继续查找后面是否有0
  while (i + 1 < data.length && data[i + 1] == 0) {
    i++;
    count++;
  }
  //5. 删除0
  data.splice(start, count);
  //6. 数组长度变化，将i回退。
  i = i - count + 1;
  //7. 重置start和count
  start = i;
  count = 0;
}
console.log(data);
