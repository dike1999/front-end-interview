function quickSort(arr) {
  // 考虑边界，终止条件
  if (arr.length <= 1) {
    return arr;
  }
  let newArr = [...arr]; // 腾讯面试，要求不影响原数组
  let basic = newArr.splice(Math.floor(newArr.length / 2), 1)[0];
  let left = newArr.filter((num) => num < basic);
  let right = newArr.filter((num) => num >= basic);

  return quickSort(left).concat([basic], quickSort(right));
}

let arr = [-2, 10, 9, 13, -10, 8, 7, 20, 1, -1];
console.log(quickSort(arr));
