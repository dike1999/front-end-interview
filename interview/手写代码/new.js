function New(ctor, ...args) {
  if (typeof ctor !== 'function') {
    throw 'myNew function the first param must be a function';
  }
  let newObj = {};
  newObj.__proto__ = ctor.prototype;
  let res = ctor.apply(newObj, args); // 将构造函数ctor的this绑定到newObj中

  if (res !== null && (typeof res === 'object' || typeof res === 'function')) {
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
