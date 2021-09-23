function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function changeColor(color, ms) {
  return new Promise((resolve) => {
    console.log(`${color}, 等待${ms}`);
    sleep(ms).then(resolve);
  });
}

function main() {
  return new Promise(() => {
    changeColor("red", 2000).then(() => {
      changeColor("yello", 1000).then(() => {
        changeColor("red", 3000).then(() => {
          main();
        });
      });
    });
  });
}

main();
