let str = 'xyzzyxyx';
function computed(str) {
  let map = new Map();
  let max = 0;
  let obj = {};
  let value;

  str.split('').forEach((el) => {
    if (map.has(el)) {
      map.set(el, map.get(el) + 1);
    } else {
      map.set(el, 1);
    }
    value = map.get(el);
    if (value > max) {
      obj = {};
      max = value;
      obj[el] = max;
    }
    if (value === max) {
      obj[el] = value;
    }
  });
  return obj;
}

console.log(computed(str));
