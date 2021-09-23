var p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("1");
    resolve();
  }, 3000);
});

function p2() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("2");
      resolve();
    }, 2000);
  });
}

function p3() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("3");
      resolve();
      console.log("5");
    }, 1000);
  });
}

function p4() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("4");
      resolve();
    }, 500);
  });
}

p1.then(function () {
  return p2();
})
  .then(function () {
    return p3();
  })
  .then(function () {
    return p4();
  });
