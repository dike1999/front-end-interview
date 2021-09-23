const bt = require("./二叉树");

function preorder1(root) {
  if (!root) {
    return;
  }
  console.log(root.val);
  preorder1(root.left);
  preorder1(root.right);
}

function preorder2(root) {
  if (!root) {
    return;
  }
  const stack = [root];
  while (stack.length) {
    const n = stack.pop();
    console.log(n.val);
    if (n.right) {
      stack.push(n.right);
    }
    if (n.left) {
      stack.push(n.left);
    }
  }
}

preorder1(bt);
