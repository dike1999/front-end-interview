Function.prototype.myApply = function (context) {
  if (typeof this !== 'function') {
    return;
  }
  let that = context || window; // 保存传入的this指向
  that.fn = this; // 保存当前调用的函数
  let result;

  if (arguments[1]) {
    result = that.fn(...arguments[1]);
  } else {
    result = that.fn();
  }
  return result;
};
