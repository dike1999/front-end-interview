// 思路: 将传入的对象作为原型
function create(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}

// 测试
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = create(person);
me.name = 'Matthew';
me.isHuman = true;
me.printIntroduction();
