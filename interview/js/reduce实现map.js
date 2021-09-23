Array.prototype.myMap = function (fn, thisValue) {
  let res = [];
  thisValue = thisValue || [];
  this.reduce((pre, cur, index, arr) => {
    return res.push(fn.call(thisValue, cur, index, arr));
  }, []);
  return res;
};

var arr = [2, 3, 1, 5];
arr.myMap(function (item, index, arr) {
  console.log(item, index, arr);
});
