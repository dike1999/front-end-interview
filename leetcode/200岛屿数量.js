/**
 * @param {character[][]} grid
 * @return {number}
 */
// 注意题意 连续大陆就是一个岛屿
// 遍历二维数组，每当遇到1开启搜索模式，从当前节点向左/右/上/下，每次分别移动一步，如果是1则替换为0
var numIslands = function (grid) {
  function dfs(grid, i, j) {
    // 递归终止条件
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[0].length ||
      grid[i][j] === "0"
    ) {
      return;
    }
    grid[i][j] = "0"; // 走过的标记为0
    dfs(grid, i + 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i - 1, j);
    dfs(grid, i, j - 1);
  }
  let count = 0;
  let row = grid.length;
  let col = grid[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === "1") {
        dfs(grid, i, j);
        count++;
      }
    }
  }
  return count;
};

let grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

console.log(numIslands(grid));
