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

function bfs(root) {
  let ans = [];
  const q = [root];
  while (q.length > 0) {
    const n = q.shift();
    ans.push(n.val);
    n.children.forEach((child) => {
      q.push(child);
    });
  }
  return ans;
}

console.log(bfs(tree));
