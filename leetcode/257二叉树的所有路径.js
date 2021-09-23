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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const paths = [];
  function construct_paths(node, path) {
    if (node) {
      path += node.val.toString();
      if (node.left === null && node.right === null) {
        paths.push(path);
      } else {
        path += "->"; // 当前节点不是叶子节点，继续递归遍历
        construct_paths(node.left, path);
        construct_paths(node.right, path);
      }
    }
  }

  construct_paths(root, "");
  return paths;
};
