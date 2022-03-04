function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// sleep(5000).then(() => {
//   console.log(5);
// });

function sleep2(ms) {
  let start = new Date().getTime();
  while (new Date().getTime(- start < ms) {}
}

sleep2(2000);
console.log(2);
