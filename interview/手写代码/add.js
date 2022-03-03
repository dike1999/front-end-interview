function add(num) {
  let sum = num;
  return function tempFun(numB) {
    if (arguments.length === 0) {
      return sum;
    } else {
      sum += numB;
      return tempFun;
    }
  };
}

console.log(add(1)(2)(7)(4)());
