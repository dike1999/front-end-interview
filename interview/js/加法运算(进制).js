const add = function (a, b) {
  if (a == 0) return b;
  if (b == 0) return a;
  return add(a ^ b, (a & b) << 1);
};

console.log(add(5, 4));
