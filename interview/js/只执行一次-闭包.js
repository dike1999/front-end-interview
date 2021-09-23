function wrapper(func) {
  let judge = true;
  return function (arg) {
    if (judge) {
      judge = false;
      func(arg);
    }
  };
}

let getResult = wrapper(console.log);
getResult(1);
getResult(1);
getResult(1);
