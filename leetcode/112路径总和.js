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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root === null) {
    return false;
  }
  targetSum -= root.val;
  if (targetSum === 0) {
    if (root.left === null && root.right === null) {
      return true;
    }
  }
  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};
