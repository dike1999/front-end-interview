// The TestCase is shown below
function parseToMoney(num) {
  let num1 = Math.floor(num);
  let num2 = num - num1;

  let res = [];
  while (num1 > 0) {
    res.unshift(num1.toString().slice(-3));
    num1 = Math.floor(num1 / 1000);
  }
  return res.join(',');
}

function parseToMoney2(num) {
  return num.toLocaleString();
}

// 考验正则，不会
function parseToMoney3(num) {
  return num.replace;
}

let num = 01087654.321;
console.log(parseToMoney(num));
