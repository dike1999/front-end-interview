/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  return (
    s.length == t.length &&
    s.split("").sort().toString() === t.split("").sort().toString()
  );
};

var isAnagram2 = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    const currentS = s[i];
    const currentT = t[i];
    obj[currentS] ? obj[currentS]++ : (obj[currentS] = 1);
    obj[currentT] ? obj[currentT]-- : (obj[currentT] = -1);
  }
  return Object.values(obj).every((v) => v === 0);
};

let s = "anagram",
  t = "nagaram";
console.log(isAnagram2(s, t));
