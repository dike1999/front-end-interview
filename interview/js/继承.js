/**
 * 原型链继承 子类的原型指向父类的实例
 * 由于原型链继承共享属性实例属性的缺点，属于引用类型传值，引用副本实例属性的修改必然会引起其他副本实例属性的修改，所以不常使用
 * 构造函数随时传递参数，很不灵活
 */

function SuperType() {
  this.colors = ['red', 'yellow', 'blue'];
}

function SubType() {}
SubType.prototype = new SuperType();

/*
console.log("原型链继承");
let instance1 = new SubType();
instance1.colors.push("black");
console.log(instance1.colors);
let instance2 = new SubType();
console.log(instance2.colors);
*/

/**
 * 借用构造函数继承，再执行Child构造函数的时候，子类的实例各自得到一份构造函数的副本，属于值传递，所以子类之间的属性修改是互不相关的
 * 缺点：单独使用无法达到函数复用，因为每一个函数和属性都需要在构造函数中定义，没法复用，即没有父类prototype上的函数，只有不能共用的实例属性
 * 而且instanceof操作无法确定子类实例和父类之间的关系，因为子类的prototype和父类无关
 */
function Parent() {
  this.colors = ['red', 'blue', 'green'];
}
function Child() {
  Parent.call(this);
}
/*
console.log("构造函数继承");
let instance3 = new Child();
instance3.colors.push("white");
console.log(instance3.colors);
let instance4 = new Child();
console.log(instance4.colors);
*/

/**
 * 组合式继承 常用原型链继承+构造函数继承
 * 原型链继承共享属性(属性方法和属性)，构造函数继承父类构造函数的实例属性
 * 缺点：调用了两次父类构造函数，生成了两份实例，一个子类实例，一个父类实例，父类实例作为prototype使用
 */
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.action = ['speak', 'run', 'eat'];
  console.log('组合式继承:我被调用了');
}
Person.prototype.say = function () {
  console.log(`My name is ${this.name}, and I am ${this.age} years old!`);
};
function Student(name, age, score) {
  Person.call(this, name, age); // 借用构造函数, 第一次调用父类构造函数
  this.score = score;
}
Student.prototype = new Person(); // 原型链继承, 第二次调用父类构造函数
Student.prototype.constructor = Student; // 将实例的原型上的构造函数指定为当前子类的构造函数
Student.prototype.showScore = function () {
  console.log(`My score is ${this.score}`);
};

/*
let xiaoming = new Student("xiaoming", 18, "88");
xiaoming.action.push("pinio");
console.log(xiaoming.action);
xiaoming.say();
xiaoming.showScore();

let xiaohua = new Student("xiaohua", 24, "99");
console.log(xiaohua.action);
xiaohua.say();
xiaohua.showScore();
*/

/**
 * 寄生组合式继承 最好的方法，最理想的方法
 * 解决了两次调用父类组合函数问题
 */
function Person_1(name, age) {
  this.name = name;
  this.age = age;
  this.action = ['speak', 'run', 'eat'];
  console.log('寄生组合式继承:我被调用了');
}
Person_1.prototype.say = function () {
  console.log(`My name is ${this.name}, and I am ${this.age} years old!`);
};
function Student_1(name, age, score) {
  Person_1.call(this, name, age); // 借用构造函数, 第一次调用父类构造函数
  this.score = score;
}
Student_1.prototype = Object.create(Person_1.prototype);
Student_1.prototype.constructor = Student_1; // 借用构造函数, 第一次调用父类构造函数
Student_1.prototype.showScore = function () {
  console.log(`My score is ${this.score}`);
};

const xiaoming_1 = new Student_1('xiaoming_1', 23, '78');
xiaoming_1.action.push('panio');
console.log(xiaoming_1.action);
xiaoming_1.say();
xiaoming_1.showScore();
console.log(Student_1 instanceof Person_1);
