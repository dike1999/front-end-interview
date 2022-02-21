Object.assign2 = function (target, ...source) {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }
  let res = Object(target);
  source.forEach((obj) => {
    if (obj != null) {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          res[key] = obj[key];
        }
      }
    }
  });
  return res;
};

let a = { age: 18, arr: [10, 20] };
let b = Object.assign2({}, a); //浅拷贝
console.log(b);
