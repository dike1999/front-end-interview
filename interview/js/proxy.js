let obj = {
  a: 1,
  b: 2,
};

let proxy = new Proxy(obj, {
  get(target, prop) {
    return Reflect.get(...arguments);
  },
  set(target, prop, value) {
    target[prop] = value;
    return Reflect.set(...arguments);
  },
});

proxy.a = 4;
console.log(proxy, obj);
console.log(proxy.a, obj.a);
