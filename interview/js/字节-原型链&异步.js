function extend(Child, Person) {
  Child.prototype = new Person();
  Child.prototype.constructor = Child;
}

function Person(name) {
  this.name = name;
}
Person.prototype.getName = function () {
  return this.name;
};
function Child(name) {
  Person.call(this, name);
}

extend(Child, Person);
let me = new Child("dike1");
console.log(me.getName());

/*
class Task {}

let t = new Task();

t.add(console.log(1)).add(console.log(2)).sleep(2000).add(console.log(3));

// 写一个类,利用异步这些，来实现add,sleep这些方法: Task类.js
*/

// eventloop
async function async1() {
  console.log("async1 start"); // 2
  await async2();
  console.log("async1 end"); // 6
}

async function async2() {
  console.log("async2"); // 3
}

console.log("script start"); // 1

setTimeout(function () {
  console.log("setTimeOut"); // 8
}, 0);

async1();

new Promise(function (resolve) {
  console.log("promise1"); // 4
  resolve();
}).then(function () {
  console.log("promise2"); // 7
});

console.log("script end"); // 5
