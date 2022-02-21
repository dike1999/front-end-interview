function changeColor(color, ms) {
  return new Promise((resolve) => {
    console.log(`${color}, 等待${ms}`);
    setTimeout(resolve, ms);
  });
}

function main() {
  changeColor('red', 2000).then(() => {
    changeColor('yello', 1000).then(() => {
      changeColor('red', 3000).then(() => {
        main();
      });
    });
  });
}

main();
