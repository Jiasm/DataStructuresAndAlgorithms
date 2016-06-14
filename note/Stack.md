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

2.      push
```javascript
push(elements) {
  if (elements[Symbol.iterator]) {  // 如果该参数实现了 iterator的接口 则认为这是一个集合类的值
    for (let element of elements) { // 遍历该参数 并调用 push方法
      this.items.push.call(this, element);
    }
  } else {
    this.items.push(elements);      // 将参数push至数组尾部
  }
}
```

3.      pop
```javascript
pop() {

  return this.items.pop();          // 只是调用原生Array的pop即可。
}
```

4.      peek
```javascript
peek() {

  return this.items.slice(-1)[0];  // slice取出来的是一个数组 然后取出数组中的第0个 就是数组尾部的子项
}
```

5.      clear
```javascript
clear() {

  this.items.length = 0;           // 给length赋值为0 间接的清空了数据
}
```

6.      isEmpty
```javascript
isEmpty() {

  return !this.items.length;      // 返回length是否大于0
}
```

7.      size
```javascript
size() {

  return this.items.length;       // 返回length
}
```
<!-- demo -->
<style>
  #demo {
    box-sizing: border-box;
    position: relative;
    width: 100px;
    height: 200px;
    border: 2px solid red;
    border-top: none;
    animation: test 1s;
    margin-top: 100px;
  }
  #demo .ball {
    content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #00a5dd;
    bottom: 0;
    left: 120px;
    animation: show 10s 0s infinite;
    color: #fff;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
  }
  #demo .ball.ball2 {
    animation: show2 10s 0s infinite;
  }
  @keyframes show {
    5% {
      bottom: 100%;
      left: 120px;
    }
    10% {
      left: 25px;
      bottom: 100%;
    }
    15%, 60% {
      left: 25px;
      bottom: 0;
    }
    65% {
      left: 25px;
      bottom: 100%;
    }
    70% {
      left: 120px;
      bottom: 100%;
    }
    75% {
      left: 120px;
      bottom: 0;
    }
  }
  @keyframes show2 {
    15% {
      bottom: 0;
      left: 120px;
    }
    20% {
      bottom: 100%;
      left: 120px;
    }
    25% {
      left: 25px;
      bottom: 100%;
    }
    30%, 45% {
      left: 25px;
      bottom: 50px;
    }
    50% {
      left: 25px;
      bottom: 100%;
    }
    55% {
      left: 120px;
      bottom: 100%;
    }
    60% {
      left: 120px;
      bottom: 0;
    }
  }
</style>
<div id="demo">
  <div class="ball">一</div>
  <div class="ball ball2">二</div>
</div>
