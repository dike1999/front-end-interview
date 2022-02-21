function Person(name, age) {
  this.name = name;
  this.age = age;
  this.action = ['speak', 'run', 'eat'];
  console.log('寄生组合式继承: 我被调用了');
}
Person.prototype.say = function () {
  console.log(`My name is ${this.name}, and I am ${this.age} years old!`);
};

function Student(name, age, score) {
  Person.call(this, name, age);
  this.score = score;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.showScore = function () {
  console.log(`${this.name}'s score is ${this.score}`);
};

const xiaoming = new Student('xiaoming', 23, '78');
xiaoming.action.push('panio');
console.log(xiaoming.action);
xiaoming.say();
xiaoming.showScore();
console.log(Student instanceof Person); // false 因未没有从原型上继承
