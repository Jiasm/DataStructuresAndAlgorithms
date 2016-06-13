'use strict';

 class Stack {

  constructor() {

    this.items = [];
  }

  push(elements) {

    var items = this.items;
    if (elements instanceof Array) {

      for (let ele of elements) {
        this.push.call(this, ele);
      }
    } else {

      items.push(elements);
    }
  }

  pop() {

    var items = this.items;
    return items.pop();
  }

  peek() {

    var items = this.items;
    return items.slice(-1)[0];
  }

  isEmpty() {

    var items = this.items;
    return !items.length;
  }

  clear() {

    var items = this.items;
    items.length = 0;
  }

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
