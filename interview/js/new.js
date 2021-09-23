function New(func, ...args) {
  // 先用Object创建一个空的对象
  let obj = new Object();
  // 新对象会被执行prototype连接
  obj.__proto__ = func.prototype;
  // 新对象和函数调用的this绑定起来
  let res = func.call(obj, ...args);
  // 判断函数返回值如果是null或者Object则返回obj,否则就放回res
  return res instanceof Object ? res : obj;
}

function father(name) {
  this.name = name;
  this.sayname = function () {
    console.log(this.name);
  };
}

var son = New(father, "dike");
son.sayname();
