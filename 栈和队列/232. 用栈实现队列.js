/**
 * 请你仅使用两个栈实现  先入先出  队列。队列应当支持一般队列支持的所有操作（push、pop、peek、empty）：

实现 MyQueue 类：

void push(int x) 将元素 x 推到队列的末尾
int pop() 从队列的开头移除并返回元素
int peek() 返回队列开头的元素
boolean empty() 如果队列为空，返回 true ；否则，返回 false
 * 
 */

var MyQueue = function () {
    this.inStack = [];
    this.outStack = [];
};

MyQueue.prototype.push = function (x) {
    this.inStack.push(x);
};

MyQueue.prototype.pop = function () {
    if (!this.outStack.length) {
        this.in2out();
    }
    return this.outStack.pop();
};

MyQueue.prototype.peek = function () {
    if (!this.outStack.length) {
        this.in2out();
    }
    return this.outStack[this.outStack.length - 1];
};

MyQueue.prototype.empty = function () {
    return this.outStack.length === 0 && this.inStack.length === 0;
};

MyQueue.prototype.in2out = function () {
    while (this.inStack.length) {
        this.outStack.push(this.inStack.pop());
    }
};


/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.stack.length === 0
};


var obj = new MyQueue()
obj.push(1)
obj.push(2)
var param_2 = obj.peek()
var param_3 = obj.pop()
var param_4 = obj.empty()
console.log(param_2, param_3, param_4);