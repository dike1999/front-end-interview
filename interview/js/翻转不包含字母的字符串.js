function reverseStr(str) {
  let res = "";
  let needReverse = "";

  function ReverseNotAlp(needReverse) {
    for (let i = needReverse.length - 1; i >= 0; i--) {
      res += needReverse[i];
    }
  }

  for (let i = 0; i < str.length; i++) {
    if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "A" && str[i] <= "Z")) {
      ReverseNotAlp(needReverse);
      res += str[i];
      needReverse = "";
    } else {
      needReverse += str[i]; // 非字母的时候一直添加到needReverse，直到循环遇上字母，进行转置
    }
  }
  return res;
}

const str = "123abd3-adfz-34-akjkfaf";
console.log(reverseStr(str));
