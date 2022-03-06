Array.prototype.myReduce = function (fn, initVal) {
  if (typeof fn !== 'function') {
    throw Error('fn should be a function');
  }
  let pre = initVal ? initVal : 0;
  let arr = [...this];
  for (let i = 0; i < arr.length; i++) {
    pre = fn(pre, arr[i], i, arr);
  }
  return pre;
};

let arr = [0, 1, 2, 3];
let sum = arr.myReduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(arr, sum);

var arrData = [
  { id: 0, name: '小明' },
  { id: 1, name: '小张' },
  { id: 2, name: '小李' },
  { id: 3, name: '小孙' },
  { id: 1, name: '小周' },
  { id: 2, name: '小陈' },
];
var obj = {};
arrData = arrData.reduce((cur, next) => {
  if (!obj[next.id]) {
    obj[next.id] = true;
    cur.push(next);
  }
  return cur;
}, []); //设置cur默认类型为数组，并且初始值为空的数组
console.log(arrData); //打印出数组去重后的结果
