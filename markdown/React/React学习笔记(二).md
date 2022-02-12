### 是什么

- **Real DOM**，真实**DOM**， 意思为文档对象模型，是一个结构化文本的抽象，在页面渲染出的每一个结点都是一个真实**DOM**结构，如下：
  ![real dom](http://101.201.140.172:7878/image/React/RealDOM.webp)
- **Virtual Dom**，本质上是以**JavaScript**对象形式存在的对**DOM**的描述
- 创建**虚拟 DOM**目的就是为了更好将虚拟的节点渲染到页面视图中，**虚拟 DOM**对象的节点与**真实 DOM**的属性一一照应
- 在 React 中，**JSX**是其一大特性，可以让你在 JS 中通过使用 XML 的方式去直接声明界面的 DOM 结构

```javascript
const vDom = <h1>Hello World</h1>; // 创建h1标签，右边千万不能加引号
const root = document.getElementById('root'); // 找到<div id="root"></div>节点
ReactDOM.render(vDom, root); // 把创建的h1标签渲染到root节点上
```

- 上述中，**ReactDOM.render()**用于将你创建好的**虚拟 DOM**节点插入到某个真实节点上，并渲染到页面上
- **JSX**实际是一种语法糖，在使用过程中会被**babel**进行编译转化成 JS 代码，上述 VDOM 转化为如下：

```javascript
const vDom = React.createElement(
  'h1',
  { className: 'hClass', id: 'hId' },
  'hello world'
);
```

- 可以看到，JSX 就是为了简化直接调用**React.createElement()**方法：

```
第一个参数是标签名，例如 h1、span、table...
第二个参数是个对象，里面存着标签的一些属性，例如 id、class 等
第三个参数是节点中的文本
```

- 通过 **console.log(VDOM)**，则能够得到虚拟 VDOM 消息
- 所以可以得到，JSX 通过 babel 的方式转化成**React.createElement**执行，返回值是一个对象，也就是虚拟 DOM

### 区别

- 两者的区别如下：

```
虚拟 DOM 不会进行排版与重绘操作，而真实 DOM 会频繁重排与重绘
虚拟 DOM 的总损耗是“虚拟 DOM 增删改+真实 DOM 差异增删改+排版与重绘”，真实 DOM 的总损耗是“真实 DOM 完全增删改+排版与重绘”
```

- 举例:

```
传统的原生**api**或**jQuery**去操作**DOM**时，浏览器会从**构建 DOM 树**开始从头到尾执行一遍流程
当你在一次操作时，需要更新 10 个**DOM**节点，浏览器没这么智能，收到第一个更新**DOM**请求后，并不知道后续还有 9 次更新操作，因此会马上执行流程，最终执行 10 次流程
而通过**VNode**，同样更新 10 个**DOM**节点，**虚拟 DOM**不会立即操作**DOM**，而是将这 10 次更新的**diff**内容保存到本地的一个**js**对象中，最终将这个**js**对象一次性**attach**到**DOM**树上，避免大量的无谓计算
```

### 优缺点

- 真实 DOM 的优势:

```
易用
```

- 真实 DOM 的缺点:

```
效率低，解析速度慢，内存占用量过高
性能差：频繁操作真实 DOM，易于导致重绘与回流
```

- 虚拟 DOM 的优势:

```
简单方便：如果使用手动操作真实 DOM 来完成页面，繁琐又容易出错，在大规模应用下维护起来也很困难
性能方面：使用 Virtual DOM，能够有效避免真实 DOM 数频繁更新，减少多次引起重绘与回流，提高性能
跨平台：React 借助虚拟 DOM， 带来了跨平台的能力，一套代码多端运行
```

- 虚拟 DOM 的缺点:

```
在一些性能要求极高的应用中虚拟 DOM 无法进行针对性的极致优化
首次渲染大量 DOM 时，由于多了一层虚拟 DOM 的计算，速度比正常稍慢
```
