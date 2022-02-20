function test(n) {
  let sum = 0;
  let day = 1;
  let cur = 1;

  while (day <= n) {
    for (let j = 1; j <= cur && day <= n; j++) {
      sum += cur;
      day++;
    }
    cur++;
  }
  return sum;
}

console.log(test(4));
