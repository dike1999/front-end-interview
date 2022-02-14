/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let len = s.length;
  let result = 0;
  let set = new Set();
  // 左指针用来收缩窗口, 右指针用来扩张窗口
  let left = 0,
    right = 0;
  while (left < len) {
    // 如果不重复，就不断扩张窗口，元素添加到set中
    while (right < len && !set.has(s[right])) {
      set.add(s[right]);
      right++;
    }
    // 到这里说明有元素重复了，先记录子串长度，然后收缩窗口
    result = Math.max(result, right - left);
    // 收缩窗口
    set.delete(s[left]);
    left++;
  }
  return result;
};
