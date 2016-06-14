'use strict';

 class Stack {

  constructor() {

    this.items = [];
  }

  /**
   * 向Stack中添加一个或多个元素
   * @param  {Object} elements 元素或元素的集合
   */
  push(elements) {

    var items = this.items;
    if (elements[Symbol.iterator]) {

      for (let ele of elements) {
        this.push.call(this, ele);
      }
    } else {

      items.push(elements);
    }
  }

  /**
   * 移除顶部的元素并返回
   * @return {Object} 被移除的顶部的元素
   */
  pop() {

    var items = this.items;
    return items.pop();
  }

  /**
   * 获取顶部的元素
   * @return {Object} 获取顶部的元素
   */
  peek() {

    var items = this.items;
    return items.slice(-1)[0];
  }

  /**
   * 判断是否有数据
   * @return {Boolean} true: 空 false: 非空
   */
  isEmpty() {

    var items = this.items;
    return !items.length;
  }

  /**
   * 清除数据
   */
  clear() {

    var items = this.items;
    items.length = 0;
  }

  /**
   * 返回元素的个数
   * @return {Number} Stack中元素的个数
   */
  size() {

    var items = this.items;
    return items.length;
  }
}


// test

var stack = new Stack();

stack.push(1);
stack.push([2, 3, 4]);

console.log(stack.size());

console.log(stack.peek());

console.log(stack.pop());

console.log(stack.size());

console.log(stack.isEmpty());

stack.clear();

console.log(stack.isEmpty());

// end test
