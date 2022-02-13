console.log('1'); // 1

setTimeout(function () {
  console.log('2'); // 5
  process.nextTick(function () {
    console.log('3'); // 7
  });
  new Promise(function (resolve) {
    console.log('4'); // 6
    resolve();
  }).then(function () {
    console.log('5'); // 8
  });
});

process.nextTick(function () {
  console.log('6'); // 3
});

new Promise(function (resolve) {
  console.log('7'); // 2
  resolve();
}).then(function () {
  console.log('8'); // 4
});

setTimeout(function () {
  console.log('9'); // 9
  process.nextTick(function () {
    console.log('10'); // 11
  });
  new Promise(function (resolve) {
    console.log('11'); // 10
    resolve();
  }).then(function () {
    console.log('12'); // 12
  });
});
