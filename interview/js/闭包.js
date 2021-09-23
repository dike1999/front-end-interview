function f1() {
  let n = 0;
  return function () {
    n++;
    console.log(n);
  };
}

let num = new Array();
for (var i = 0; i < 4; i++) {
  num[i] = f1();
}
num[1]();
num[2]();
num[2]();

function a() {
  let i = 10;
  return () => {
    console.log(i++);
  };
}
var c = a();
c();
c();
c();
c();

function init() {
  var name = "Mozilla";
  return function () {
    console.log(name);
  };
}
init()();
