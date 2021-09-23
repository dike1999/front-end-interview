function Tricolore(arr) {
  let begin = 0,
    current = 0;
  let end = arr.length - 1;

  while (current <= end) {
    if (arr[current] === 0) {
      [arr[begin], arr[current]] = [arr[current], arr[begin]];
      begin++;
      current++;
    } else if (arr[current] === 1) {
      current++;
    } else {
      [arr[end], arr[current]] = [arr[current], arr[end]];
      end--;
    }
  }
  return arr;
}

let input = [2, 0, 1, 0, 0, 2, 1, 1, 2];
console.log(Tricolore(input));
