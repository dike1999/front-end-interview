function mySetInterval(func, ms, count) {
  function interval() {
    if (typeof count === 'undefined' || count-- > 0) {
      setTimeout(interval, ms);
      try {
        func();
      } catch (e) {
        count = 0;
        throw e.toString();
      }
    }
  }
  setTimeout(interval, ms);
}

mySetInterval(
  () => {
    console.log(222);
  },
  2000,
  3
);
