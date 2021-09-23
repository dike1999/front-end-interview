/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) {
    return false;
  }
  const map = new Map([
    ["}", "{"],
    [")", "("],
    ["]", "["],
  ]);
  let stack = [];
  try {
    s.split("").forEach((ch) => {
      if (map.has(ch)) {
        if (!stack.length || stack[stack.length - 1] !== map.get(ch)) {
          throw e;
        }
        stack.pop();
      } else {
        stack.push(ch);
      }
    });
  } catch (error) {
    return false;
  }
  return !stack.length;
};
