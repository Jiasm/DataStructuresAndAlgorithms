'use strict';

class Queue {

  constructor() {

    var items = this.items = [];
  }

  /**
   * 向队列尾部添加一个元素
   * @param  {Object} 要添加的值
   */
  enqueue(element) {

    var items = this.items;
    items.push(element);
  }

  /**
   * 移除队列的第一个被添加的项 并返回
   * @return {Object} 第一个被添加的项
   */
  dequeue() {

    var items = this.items;
    return items.shift();
  }

  /**
   * 返回队列的第一个被添加的项
   * @return {Object} [description]
   */
  front() {

    var items = this.items;
    return items[0];
  }

  /**
   * 返回队列是否为空
   * @return {Boolean} true: 空  false: 非空
   */
  isEmpty() {

    var items = this.items;
    return !items.length
  }

  /**
   * 清空队列
   */
  clear() {

    var items = this.items;
    items.length = 0;
  }

  /**
   * 返回队列元素的个数
   * @return {Number} 队列的个数
   */
  size() {

    var items = this.items;
    return items.length
  }
}


// test

var queue = new Queue();

console.log('isEmpty', queue.isEmpty());

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log('size', queue.size());

console.log('front', queue.front());

console.log('size', queue.size());

console.log('dequeue', queue.dequeue());

console.log('size', queue.size());
