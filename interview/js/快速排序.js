function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let newArr = [...arr];
  let basic = newArr.splice(Math.floor(newArr.length / 2), 1)[0];
  let left = [];
  let right = [];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] < basic) {
      left.push(newArr[i]);
    } else {
      right.push(newArr[i]);
    }
  }
  return quickSort(left).concat([basic], quickSort(right));
}

let arr = [-2, 10, 9, 13, -10, 8, 7, 20, 1, -1];
console.log(quickSort(arr));
