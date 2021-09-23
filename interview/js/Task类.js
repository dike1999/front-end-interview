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
