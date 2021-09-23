/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix.length || !matrix[0].length) {
    return [];
  }
  const rows = matrix.length,
    columns = matrix[0].length;
  let left = 0,
    top = 0,
    right = columns - 1,
    bottom = rows - 1;
  let res = [];
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    for (let i = top + 1; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    if (left < right && top < bottom) {
      for (let i = right - 1; i > left; i--) {
        res.push(matrix[bottom][i]);
      }
      for (let i = bottom; i > top; i--) {
        res.push(matrix[i][left]);
      }
    }
    [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
  }
  return res;
};
