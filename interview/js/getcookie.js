function getCookie(name) {
  let data = "";
  if (document.cookie) {
    let arr = document.cookie.split(";");
    for (let str of arr) {
      let temp = str.split("=");
      if (temp[0].replace(/(^\s*)/g, "") === name) {
        data = unescape(temp[1]);
        break;
      }
    }
  } else {
    console.log("cookie不存在");
  }
  return data;
}
