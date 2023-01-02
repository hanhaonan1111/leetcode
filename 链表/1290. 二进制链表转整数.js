/**
 * 给你一个单链表的引用结点 head。链表中每个结点的值不是 0 就是 1。
 * 已知此链表是一个整数数字的二进制表示形式。
 *  请你返回该链表所表示数字的 十进制值 。
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
// 正式代码
var getDecimalValue = function (head) {
    let queue = []
    while (head) {
        queue.push(head.val + '')
        head = head.next
    }
    let num = queue.join('')
    return parseInt(num, 2)
};

// 测试数据
let node = new ListNode(1, new ListNode(1, new ListNode(0)))

let res = getDecimalValue(node)
console.log(res, 'ress');