function midSelect(arr, target) {
  let left = 0,
    right = arr.length - 1;
  let mid, flag;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      flag = true;
      break;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  while (arr[mid - 1] === target) {
    mid--;
  }
  if (flag) {
    return mid;
  } else {
    return -1;
  }
}

function even(arr) {
  let even = arr.filter((item) => item % 2 === 1);
  return even.reduce((sum, item) => (sum += item)) - Math.max(...even);
}

const arr = [1, 2, 3, 5, 5, 6, 9, 10, 10, 17];
let m = 2,
  n = 5;
function digui(m, n) {
  if (m === n) {
    return m;
  }
  return n + digui(m, n - 1);
}

// 洗牌算法
function shuffle(arr) {
  let i = arr.length;
  while (i) {
    let j = Math.floor(Math.random() * i--);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// 元素为1,2,...,100的数组（非有序）中，有一个缺失的数字，如何找到缺失的数组
function arrayList() {
  // 数组和，公式和
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  arr = shuffle(arr);
  arr.splice(9, 1);
  console.log(arr);
  let target = (10 * (10 + 1)) / 2;
  let sum = arr.reduce((sum, val) => (sum += val));
  console.log(target - sum);
}
arrayList();
