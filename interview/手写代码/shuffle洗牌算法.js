// 洗牌算法
function shuffle(arr) {
  let i = arr.length;
  while (i) {
    let j = Math.floor(Math.random() * i--);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(shuffle(arr));
