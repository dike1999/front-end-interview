// 进程线程详细区别
// TCP拥塞控制
// 0.1+0.2原因+解决方法
// 431状态码怎么解决
// http2二进制分帧详情
// vnode render
// commonjs和esModule

// 闭包实现计数器
function counter() {
  let num = 0;
  return function () {
    console.log(++num);
  };
}

// 奇偶数组拼接, 求时间复杂度(先用了filter, 面试官不满意)
// 改写成双指针方法(当时测试用例有些不成功，让我结束补)
// 现在写的这个还是会乱序啊...面试官明明要求了保证顺序
// LeetCode也这样, 求大佬解法
function func(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    while (left < right && arr[left] % 2 == 1) {
      left++;
    }
    while (left < right && arr[right] % 2 == 0) {
      right--;
    }
    [arr[left], arr[right]] = [arr[right], arr[left]];
  }
  return arr;
}
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(func(arr));
