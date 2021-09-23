function BaiCiZhan(key, index) {
  let arr = Array(key).fill(1);
  let sum = Array(key).fill(1);
  for (let i = key; i <= index; i++) {
    let num = sum.reduce((n, val) => n + val);
    arr[i] = num;
    sum.shift();
    sum.push(num);
  }
  return arr[index];
}

console.log(BaiCiZhan(3, 5));
