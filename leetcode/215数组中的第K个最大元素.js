/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const target = nums.length - k; //因为我们快排是从小到大的，所以k就相当于从后面数，我们现在把它转换为前面数

  const dfs = (array, start) => {
    //定义一个递归函数（快排）（数组，起始下标）
    let left = []; //定义一个数组（左，用来存放所有比当前值小的数）
    let right = []; //定义一个数组（右，用来存放所有比当前值大的数）
    const midNum = array.splice(Math.floor(array.length / 2), 1)[0]; //截取出当前数组的当前值（原数组改变），并赋值给midNum

    for (let i = 0; i < array.length; i++) {
      if (array[i] < midNum) {
        left.push(array[i]); //插入到left数组
      } else {
        right.push(array[i]); //插入到right数组
      }
    }

    if (left.length + start === target) {
      //如果当前值的下标等于目标值下标target
      return midNum; //返回当前值
    } else if (left.length + start > target) {
      //如果当前值的下标比目标值下标大，就递归left数组
      return dfs(left, start); //将left数组递归（起始位置值还是start）
    } else {
      //如果当前值的下标比目标值下标小，就递归right数组
      return dfs(right, left.length + start + 1); //将right数组递归（起始位置值，要包含且+1）
      //left.length + start ：是当前值下标，要+1之后才会是下一组的起始值
    }
  };

  return dfs(nums, 0); //调用递归函数，并返回最后的结果
};

let test = [3, 2, 1, 5, 6, 4];
console.log(findKthLargest(test, 2));
