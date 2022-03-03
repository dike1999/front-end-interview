/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  const dfs = (node, preSum) => {
    if (node === null) {
      return 0;
    }
    const sum = preSum * 10 + node.val;
    if (node.left == null && node.right == null) {
      return sum;
    } else {
      return dfs(node.left, sum) + dfs(node.right, sum);
    }
  };
  return dfs(root, 0);
};
