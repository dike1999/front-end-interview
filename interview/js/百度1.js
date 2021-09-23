let n = 2,
  k = 2;

let arr1 = [
  [0, 1],
  [1, 0],
];

let res = [];
for (let i = 0; i < n; i++) {
  let test = [];
  let arr = arr1[i];
  for (let j = 0; j < n; j++) {
    let temp = Array(k).fill(arr[j]);
    test.push(...temp);
  }
  for(let m = 0; m < k; m++) {
    res.push(test);
  }
}
console.log(res);
