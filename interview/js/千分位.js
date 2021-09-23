// The TestCase is shown below
function parseToMoney(num) {
  let num1 = num.toString().split(".")[0];
  let num2 = num.toString().split(".")[1] || 0;

  let res = [];
  while (num1) {
    // let temp = ("000" + (num1 % 1000)).substr(-3);
    let temp = (num1 % 1000).toString().padStart(3, "0");
    res.unshift(temp);
    num1 = Math.floor(num1 / 1000);
  }
  res = parseInt(res.shift()) + "," + res.join(",") + "." + num2;
  return res;
}

function parseToMoney2(num) {
  return num.toLocaleString();
}

function parseToMoney3(num) {
  return num.replace;
}

let num = 1087654.321;
console.log(parseToMoney(num));
