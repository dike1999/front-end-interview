function getMaxSubMin(arr) {
  return Math.max(...arr) - Math.min(...arr);
}

let arr = [-2, 10, 9, 13, -10, 8, 7, 20, 1, -1];
console.log(getMaxSubMin(arr));
