function throttle(func, wait) {
  let previous = 0;
  return function () {
    let args = arguments;
    let context = this;
    let now = new Date();
    if (now - previous > wait) {
      func.apply(context, args);
      previous = now;
    }
  };
}
