/**
 * 给你两个链表 list1 和 list2 ，它们包含的元素分别为 n 个和 m 个。
 * 请你将 list1 中下标从 a 到 b 的全部节点都删除，并将list2 接在被删除节点的
 * 位置。
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
//方法 :模拟->双指针
var mergeInBetween = function (list1, a, b, list2) {
    let index = 0
    let a_fter = list1 // 前一位
    let start = list1
    while (index < b) {
        if (index < a - 1) {
            start = start.next
        }
        a_fter = a_fter.next
        index++
    }
    index = 0
    start.next = list2
    let after = list2 // b的尾部节点
    while (after.next) {
        after = after.next
    }
    after.next = a_fter.next
    return list1
};


// 测试数据
let node = new ListNode(0, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(
    4, new ListNode(5, new ListNode(6))
)))))
let node2 = new ListNode(-5, new ListNode(-8, new ListNode(-8)))
let res = mergeInBetween(node, 3, 4, node2)
console.log(res, 'ress');
