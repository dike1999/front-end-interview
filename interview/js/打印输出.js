let inner = 'Window';

function say() {
  console.log(inner);
  console.log(this.inner);
}

var obj1 = (function () {
  var inner = '1-1';
  return {
    inner: '1-2',
    say: function () {
      console.log(inner);
      console.log(this.inner);
    },
  };
})();

var obj2 = (function () {
  var inner = '2-1';
  return {
    inner: '2-2',
    say: function () {
      console.log(inner);
      console.log(this.inner);
    },
  };
})();

say(); // WIndow undefined
obj1.say(); // 1-1 1-2
obj2.say(); // 2-1 2-2
obj1.say = say;
obj1.say(); // Window 1-2
obj1.say = obj2.say;
obj1.say(); // 2-1 1-2
