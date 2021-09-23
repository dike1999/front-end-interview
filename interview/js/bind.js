Function.prototype.myBind = function (context) {
  // bind中的参数
  let args = [...arguments].slice(1);
  // 保存原函数
  let self = this;
  // 创建一个新函数
  return function () {
    return self.apply(context, args.concat(...arguments));
  };
};

const Obj = {
  name: "dike",
};
function Test() {
  console.log(this.name);
}
Test.myBind(Obj, [1, 2])([3]);
