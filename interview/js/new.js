function New(ctor, ...args) {
  if (typeof ctor !== 'function') {
    throw 'myNew function the first param must be a function';
  }
  let newObj = {};
  newObj.__proto__ = ctor.prototype;
  let res = ctor.apply(newObj, args); // 将构造函数ctor的this绑定到newObj中

  const isObject = typeof res === 'object' && res !== null;
  const isFunction = typeof res === 'function';
  if (isObject || isFunction) {
    return res;
  }
  return newObj;
}

function father(name) {
  this.name = name;
  this.sayname = function () {
    console.log(this.name);
  };
}

var son = New(father, 'dike');
son.sayname();
