Function.prototype.myApply = function (context, args) {
  if (typeof this !== 'function') {
    return;
  }
  let that = context || window; // 保存传入的this指向
  that.fn = this; // 保存当前调用的函数
  let result;

  if (args) {
    result = that.fn(...args);
  } else {
    result = that.fn();
  }
  return result;
};

var person = {
  fullName: function (city, country) {
    console.log(
      this.firstName + ' ' + this.lastName + ',' + city + ',' + country
    );
  },
};
var person1 = {
  firstName: 'John',
  lastName: 'Doe',
};
person.fullName.myApply(person1, ['Oslo', 'Norway']);
