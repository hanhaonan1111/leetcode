/**
 * 给你一个字符串 s ，请你反转字符串中 单词 的顺序。
 * 单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。
 * 返回 单词 顺序颠倒且 单词 之间用单个空格连接的结果字符串。
 */
// 法1:API
var reverseWords1 = function (s) {
    return s.trim().split(' ').reverse().filter(v => v.length !== 0).join(' ')
};

// 法2:队列
function reverseWords(s) {
    s = s.trim()
    s = s.split(' ')
    let queue = []
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        if (element !== '') { queue.push(element) }
    }
    let res = ''
    while (queue.length) {
        let head = queue.shift()
        console.log(head);
        res = head + ' ' + res
    }
    return res.slice(0, res.length - 1)
}


let res = reverseWords("a good example")
// console.log(res);