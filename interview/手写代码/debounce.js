/**
 * @description 防抖函数
 * @param {function} func 函数
 * @param {number} wait 延迟执行毫秒数
 * @param {boolean} immediate 是否立即执行
 * @returns {function}
 */
function debounce(func, wait, immediate = false) {
  let timeout;

  return function () {
    let context = this;
    let args = arguments;

    if (timeout) clearTimeout(timeout);

    if (immediate) {
      let callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    }
  };
}
