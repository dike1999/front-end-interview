function add(num) {
  var sum = num;
  return function tempFun(numB) {
    if (arguments.length === 0) {
      return sum;
    } else {
      sum = sum + numB;
      return tempFun;
    }
  };
}

console.log(add(1)(2)(7)(4)());
