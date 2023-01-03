/**
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的
 * 方式存储的，并且每个节点只能存储 一位 数字。
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。 
*/
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
// 正式代码
var addTwoNumbers = function (l1, l2) {
    let c1 = l1
    let c2 = l2
    let res = new ListNode(-1)
    let res2 = res
    let jinwei = 0
    while (c1 || c2) {
        if (!c1) {
            let val = c2.val + jinwei
            if (val >= 10) {
                val = val - 10
                jinwei = 1
            } else {
                jinwei = 0
            }
            res2.next = new ListNode(val)
            c2 = c2.next
        }
        else if (!c2) {
            let val = c1.val + jinwei
            if (val >= 10) {
                val = val - 10
                jinwei = 1
            } else {
                jinwei = 0
            }
            res2.next = new ListNode(val)
            c1 = c1.next
        }
        else if (c1 && c2) {
            let val = c1.val + c2.val + jinwei
            if (val >= 10) {
                val = val - 10
                jinwei = 1
            } else {
                jinwei = 0
            }
            res2.next = new ListNode(val)
            c1 = c1.next
            c2 = c2.next
        }
        res2 = res2.next
    }
    if (jinwei === 1) {
        res2.next = new ListNode(1)
    }
    return res.next
}



// 测试数据
let l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))))
let l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9,))))
let res = addTwoNumbers(l1, l2)
console.log(res);