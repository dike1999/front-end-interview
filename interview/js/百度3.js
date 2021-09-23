let n = 4;
let te = [213, 3204, 22, 100];
let res = [];

for (let i = 0; i < n; i++) {
  let line = te[i];
  while (line) {
    let test = line.toString().replace(/[1-3]/g, "");
    if (test == "") {
      res.push(line);
      break;
    }
    line--;
  }
}

res.forEach((item) => {
  console.log(item);
});

/*
if (line % 10 == 0) {
        line = line - 1;
    }
    let test = line.toString().replace(/[4-9]/g, "3");
    res.push(test);
*/
