/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) {
    return false;
  }
  const map = new Map([
    ['}', '{'],
    [']', '['],
    [')', '('],
  ]);
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      if (!stack.length || stack[stack.length - 1] !== map.get(s[i])) {
        return false;
      }
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return !stack.length;
};
