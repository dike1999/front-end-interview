/**
 * 给定一个字符串，找到它的第一个不重复的字符，
 * 并返回它的索引。如果不存在，则返回 -1。
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let map = {};
  for (let v of s) {
    map[v] = (map[v] || 0) + 1;
  }
  s.split("");
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};

s1 = "leetcode";
s2 = "loveleetcode";

console.log(firstUniqChar(s1));
console.log(firstUniqChar(s2));
