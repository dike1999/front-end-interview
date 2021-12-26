function repeat(func, times, wait) {
  return function (context) {
    for (let i = 0; i < times; i++) {
      setTimeout(() => {
        func(context, i);
      }, i * wait);
    }
  };
}

// 使下面调用代码能正常工作
const repeatFunc = repeat(console.log, 4, 3000);
repeatFunc('hello world'); //会输出4次 hello world, 每次间隔3秒
