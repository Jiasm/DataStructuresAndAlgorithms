##      Stack

###     需要实现的方法有如下：

* 			push(ele(s))  向Stack中添加一个或多个值
*    		pop()         删除Stack中栈顶的值并返回
*      	peek()        取出Stack中栈顶的值
*       clear()       清空Stack
*       isEmpty()     返回Stack是否为空
*       size()        返回Stack的大小

###     如何实现：

1.      创建一个class
```javascript
class Stack {
  constructor() {     // 构造函数
    this.items = [];  // 创建一个空数组 用来存储Stack中的数据
  }
}
```

2.      push的实现
```javascript
push(elements) {
  if (elements[Symbol.iterator]) {  // 如果该参数实现了 iterator的接口 则认为这是一个集合类的值
    for (let element of elements) { // 遍历该参数 并调用 push方法
      this.items.push.call(this, element);
    }
  } else {
    this.items.push(elements);
  }
}
```
