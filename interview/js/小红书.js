// 给一个 id，需要找到所有父亲节点的 name 值
const cityData = [
  {
    id: "1",
    name: "广东省",
    children: [
      {
        id: "11",
        name: "深圳市",
        children: [
          {
            id: "111",
            name: "南山区",
          },
          {
            id: "112",
            name: "福田区",
            children: [
              {
                id: "1121",
                name: "A街道",
              },
            ],
          },
        ],
      },
      {
        id: "12",
        name: "东莞市",
        children: [
          {
            id: "121",
            name: "A区",
          },
          {
            id: "122",
            name: "B区",
          },
        ],
      },
    ],
  },
];
