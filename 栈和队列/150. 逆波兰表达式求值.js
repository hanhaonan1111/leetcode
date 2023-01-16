/**
 * 给你一个字符串数组 tokens ，表示一个根据 逆波兰表示法 表示的算术表达式。
请你计算该表达式。返回一个表示表达式值的整数。
注意：
有效的算符为 '+'、'-'、'*' 和 '/' 。
每个操作数（运算对象）都可以是一个整数或者另一个表达式。
两个整数之间的除法总是 向零截断 。
表达式中不含除零运算。
输入是一个根据逆波兰表示法表示的算术表达式。
答案及所有中间计算结果可以用 32 位 整数表示。
 */
// 方法:栈解决
var evalRPN1 = function (tokens) {
    let stack = []
    for (let val of tokens) {
        if (['+', '-', '*', '/'].indexOf(val) > -1) {
            // 符号
            let num1 = +stack.pop()
            let num2 = +stack.pop()
            switch (val) {
                case '+':
                    stack.push(num1 + num2 + '')
                    break;
                case '-':
                    stack.push(num2 - num1 + '')
                    break;
                case '*':
                    stack.push(num1 * num2 + '')
                    break;
                case '/':
                    stack.push(parseInt(num2 / num1) + '')
                    break;
            }
        } else {
            // 数字
            stack.push(val)
        }
    }
    return +stack[0]
};
// 优化方法1
function evalRPN(tokens) {
    let stack = []
    for (let val of tokens) {
        let num1
        let num2
        // 切记,从尾部删除值的条件
        if (stack.length >= 2 && ['+', '-', '*', '/'].indexOf(val) != -1) {
            num1 = +stack.pop()
            num2 = +stack.pop()
        }
        let res
        switch (val) {
            case '+':
                res = num1 + num2 + ''
                break;
            case '-':
                res = num2 - num1 + ''
                break;
            case '*':
                res = num1 * num2 + ''
                break;
            case '/':
                res = parseInt(num2 / num1) + ''
                break;
            default:
                stack.push(val)
                break
        }
        if (res) {
            stack.push(res)
        }
    }
    return Number(stack[0])
};
//测试数据
let res = evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
console.log(res);
