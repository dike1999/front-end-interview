/* 
let a = 1;

const function1 = function () {
  console.log(a);
  a = 2;
};

a = 3;
const function2 = function () {
  console.log(a);
};

function1();
function2();
*/

var Person = {
  name: 'zhangsan',
  age: 19,
};

function aa(x, y) {
  console.log(x + ',' + y);
  console.log(this);
  console.log(this.name);
}

aa(4, 5); //this指向window--4,5  window  空
aa.call(Person, 4, 5); //this指向Person--4,5  Person{}对象  zhangsan

aa.apply(Person, [4, 5]); //this指向Person--4,5  Person{}对象  zhangsan

aa.bind(Person, 4, 5); //只是更改了this指向，没有输出
aa.bind(Person, 4, 5)(); //this指向Person--4,5  Person{}对象  zhangsan

/*
var a = {
  b: function () {
    console.log(this);
  },
};
var c = a.b;
c();
*/
//这个this指向谁？
//Window
