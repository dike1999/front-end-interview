/**
 * 写一个类,利用异步这些, 来实现add,sleep这些方法链式调用
 * 这里求优化，目前sleep在最后执行bug
 */

class Task {
  constructor() {
    this.queue = Promise.resolve();
  }

  add(func) {
    this.queue = this.queue.then(() => {
      func;
    });
    return this;
  }

  sleep(ms) {
    this.queue = this.queue.then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, ms);
      });
    });
    return this;
  }
}

let task = new Task();
task.add(console.log(1)).add(console.log(2)).sleep(2000).add(console.log(3));
