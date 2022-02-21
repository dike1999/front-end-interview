// 深拷贝
function deepClone(obj) {
  if (typeof obj !== 'object') {
    return obj;
  }
  let newObj = obj instanceof Array ? [] : {};
  for (let i in obj) {
    let template = typeof obj[i] == 'object' ? deepClone(obj[i]) : obj[i];
    newObj[i] = template;
  }
  return newObj;
}

let a = { age: 18, arr: [10, 20] };
let b = deepClone(a); //深拷贝
let c = Object.assign({}, a); //浅拷贝
let d = JSON.parse(JSON.stringify(a)); //深拷贝
a.arr[0] = 99;
console.log(a, a.arr[0]);
console.log(b, b.arr[0]);
console.log(c, c.arr[0]);
console.log(d, d.arr[0]);

let test1 = 1;
let test2 = deepClone(test1);
test1 = 3;
console.log(test1);
console.log(test2);
