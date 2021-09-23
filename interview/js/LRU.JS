function LRU(operators, k) {
  // write code here
  let map = new Map();
  let list = [];
  for (let operator of operators) {
    let key = operator[1];
    switch (operator[0]) {
      case 1:
        if (map.has(key)) {
          map.delete(key);
        }
        map.set(key, operator[2]);
        if (map.size > k) {
          map.delete(map.entries().next().value[0]);
        }
        break;
      case 2:
        if (map.has(key)) {
          let value = map.get(key);
          list.push(value);
          map.delete(key);
          map.set(key, value);
        } else {
          list.push(-1);
        }
        break;
      default:
    }
  }
  return list;
}

let res = LRU(
  [
    [1, 1, 1],
    [1, 2, 2],
    [1, 3, 2],
    [2, 1],
    [1, 4, 4],
    [2, 2],
  ],
  3
);
console.log(res);
