function selectSort(arr) {
  let len = arr.length;
  let minIndex;
  for (let i = 0; i < len; i++) {
    minIndex = i;
    for (let j = i; j < len; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

let arr = [-2, 10, 9, 13, -10, 8, 7, 20, 1, -1];
console.log(selectSort(arr));
