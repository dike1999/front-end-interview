// 对象
let eventEmitter = {
  list: {}, // 缓存列表,存放event和fn

  on(event, fn) {
    let _this = this;
    // 如果对象中没有对应的event值,也就是说明没有订阅过,就给event创建个缓存列表
    // 如果对象中有相应的event值,把fn添加到对应event的缓存列表里
    (_this.list[event] || (_this.list[event] = [])).push(fn);
    return _this;
  },

  emit() {
    let _this = this;
    // 第一个参数是对应的event值,直接用数组的shift方法取出
    // let event = [].shift.call(arguments),
    let event = [...arguments].shift(),
      fns = [..._this.list[event]];
    // 如果缓存列表里没有fn就返回false
    if (!fns || fns.length === 0) {
      return false;
    }
    // 遍历event值对应的缓存列表,依次执行fn
    fns.forEach((fn) => {
      fn.apply(_this, arguments);
    });
    return _this;
  },

  // 监听一次
  once(event, fn) {
    // 先绑定，调用后删除
    let _this = this;
    function on() {
      _this.off(event, on);
      fn.apply(_this, arguments);
    }
    on.fn = fn;
    _this.on(event, on);
    return _this;
  },

  // 取消订阅
  off(event, fn) {
    let _this = this;
    let fns = _this.list[event];
    // 如果缓存列表中没有相应的 fn，返回false
    if (!fns) return false;
    if (!fn) {
      // 如果没有传 fn 的话，就会将 event 值对应缓存列表中的 fn 都清空
      fns && (fns.length = 0);
    } else {
      // 若有 fn，遍历缓存列表，看看传入的 fn 与哪个函数相同，如果相同就直接从缓存列表中删掉即可
      let cb;
      for (let i = 0, cbLen = fns.length; i < cbLen; i++) {
        cb = fns[i];
        if (cb === fn || cb.fn === fn) {
          fns.splice(i, 1);
          break;
        }
      }
    }
    return _this;
  },
};

function user1(content) {
  console.log("用户1订阅了:", content);
}
function user2(content) {
  console.log("用户2订阅了:", content);
}
function user3(content) {
  console.log("用户3订阅了:", content);
}

function user4(content) {
  console.log("用户4订阅了:", content);
}

// 订阅
eventEmitter.on("article1", user1);
eventEmitter.on("article1", user2);
eventEmitter.on("article1", user3);

// 取消user2方法的订阅
eventEmitter.off("article1", user2);

eventEmitter.once("article2", user4);

// 发布
eventEmitter.emit("article1", "Javascript 发布-订阅模式");
eventEmitter.emit("article1", "Javascript 发布-订阅模式");
eventEmitter.emit("article2", "Javascript 观察者模式");
eventEmitter.emit("article2", "Javascript 观察者模式");
