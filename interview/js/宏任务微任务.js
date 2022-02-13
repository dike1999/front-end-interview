function app() {
  setTimeout(() => {
    console.log("1-1");
    Promise.resolve().then(() => {
      console.log("2-1");
    });
  });
  console.log("1-2");
  Promise.resolve().then(() => {
    console.log("1-3");
    setTimeout(() => {
      console.log("3-1");
    });
  });
}
app();
/*
1-2
1-3
1-1
2-1
3-1
*/


Promise.resolve()
  .then((res) => {
    setTimeout(() => {
      return 3
    }, 0);
    return 4;
  })
  .then((data) => {
    console.log(data);
    console.log(222);
  });
