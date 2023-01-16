/**
 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
有效字符串需满足：
    左括号必须用相同类型的右括号闭合。
    左括号必须以正确的顺序闭合。
    每个右括号都有一个对应的相同类型的左括号。
 */


var isValid = function (s) {
    let dic = { '(': ')', '{': '}', "[": ']' }
    let stack = []
    for (const val of s) {
        if (Object.keys(dic).indexOf(val) > -1) {
            stack.push(val)
        } else {
            // 右括号走到了这里
            if (dic[stack.pop()] !== val) {
                return false
            }
        }
    }
    return stack.length === 0
};

let res = isValid("[()]{}")
console.log(res);