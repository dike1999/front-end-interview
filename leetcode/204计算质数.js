/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  const isPrime = new Array(n).fill(1);
  let sum = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      sum += 1;
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = 0;
      }
    }
  }
  return sum;
};
