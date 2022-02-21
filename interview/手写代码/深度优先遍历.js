const tree = {
  val: "a",
  children: [
    {
      val: "b",
      children: [
        {
          val: "d",
          children: [],
        },
        {
          val: "e",
          children: [],
        },
      ],
    },
    {
      val: "c",
      children: [
        {
          val: "f",
          children: [],
        },
        {
          val: "g",
          children: [],
        },
      ],
    },
  ],
};

// 深度优先遍历
function dfs(root, ans) {
  if (!ans) {
    ans = new Array();
  }
  if (!root) {
    return ans;
  }
  ans.push(root.val);
  root.children.forEach((child) => {
    dfs(child, ans);
  });
  return ans;
}

console.log(dfs(tree));
