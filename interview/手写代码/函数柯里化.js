function curry(fn, ...args) {
  let fnLen = fn.length,
    argsLen = args.length;
  //对比函数的参数和当前传入参数
  //若参数不够就继续递归返回curry
  //若参数够就调用函数返回相应的值
  if (fnLen > argsLen) {
    return function (...args2) {
      return curry(fn, ...args, ...args2);
    };
  } else {
    return fn(...args);
  }
}

let sum = curry((a, b, c, d) => {
  return a + b + c + d;
});

console.log(sum(2)(3)(5)(6)); //16
console.log(sum(2, 3)(5, 7)); //17
