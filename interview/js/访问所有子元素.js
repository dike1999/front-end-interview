/**
 * 1. 创建一个函数, 给定页面上的DOM元素, 将访问元素本身及其所有后代(而不仅仅是它的直接子代)
 * 2. 对于访问的每个元素, 函数应将该元素传递给提供的回调函数
 * 3. 函数的参数应该是: 一个DOM元素, 一个回调函数(以DOM元素为参数)
 */

function Traverse(p_element, p_callback) {
  p_callback(p_element);
  var list = p_element.children;
  for (var i = 0; i < list.length; i++) {
    Traverse(list[i], p_callback); // recursive call
  }
}
