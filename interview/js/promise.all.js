Promise.all = (promises) => {
  let count = 0;
  let arr = [];
  let len = promises.length;
  return new Promise((resolve, reject) => {
    promises.forEach((p, i) => {
      p.then(
        (res) => {
          count++;
          arr[i] = res;
          if (count === len) {
            resolve(arr);
          }
        },
        (err) => {
          reject(err);
        }
      );
    });
  });
};

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1");
  }, 100);
});
let p2 = Promise.resolve("p2");
let p3 = Promise.resolve("p3");

Promise.all([p1, p2, p3]).then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
