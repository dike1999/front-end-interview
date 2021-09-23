function func() {
  this.list = [];
}
func.prototype.add = function (val, index) {
  this.list.splice(index, 0, val);
};

func.prototype.delete = function (val) {
  this.list = this.list.filter((x) => x !== val);
};

let test = new func();
test.add(10, 0);
test.add(11, 1);
test.add(13, 2);
test.add(14, 1);
console.log(test.list);
test.delete(14);
console.log(test.list);
