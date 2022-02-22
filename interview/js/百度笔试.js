// 1. 好像是叫像素比的题
function func1(arr, n, k) {
  let res = [];
  for (let i = 0; i < n; i++) {
    let test = [];
    let arr = arr1[i];
    for (let j = 0; j < n; j++) {
      let temp = Array(k).fill(arr[j]);
      test.push(...temp);
    }
    for (let m = 0; m < k; m++) {
      res.push(test);
    }
  }
  return res;
}
// 测试数据
let n = 2,
  k = 2;
let arr1 = [
  [0, 1],
  [1, 0],
];
console.log(func1(arr1, n, k));

// 3. 找比数组中每个数小的只含123的数? 这个超时了
function func2(arr, len) {
  let res = [];
  for (let i = 0; i < len; i++) {
    let line = arr[i];
    while (line) {
      let test = line.toString().replace(/[1-3]/g, "");
      if (test == "") {
        res.push(line);
        break;
      }
      line--;
    }
  }
  return res;
}

let arr2 = [213, 3204, 22, 100];
let len = 4;
console.log(func2(arr2, len));
