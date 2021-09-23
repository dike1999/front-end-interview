function getKMax(arr, k) {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  // arr.sort((a, b) => a - b);
  return arr[len - k];
}

let arr = [2, 10, 9, 13, 8, 7, 20, 1];
console.log(getKMax(arr, 3));
