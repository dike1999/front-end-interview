const bt = require("./二叉树");

function postorder(root) {
  if (!root) {
    return;
  }
  postorder(root.left);
  postorder(root.right);
  console.log(root.val);
}

postorder(bt);
