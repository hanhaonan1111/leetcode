/**
 * 给你一个链表的头节点 head 和一个整数 val ，请你
 * 删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
// 正式代码
var removeElements = function (head, val) {
    let link = new ListNode(-1, head)
    let cur = link
    while (cur) {
        if (cur.next?.val === val) {
            // 注意,如果下一个节点的值为目标值,则只改变当前节点的下一个节点
            cur.next = cur.next.next ? cur.next.next : null
        } else {
            // 下一个节点非目标值时候,当前节点才能引发变化
            cur = cur.next
        }
    }
    return link.next
};
// 测试数据
let node = new ListNode(4, new ListNode(4, new ListNode(4, new ListNode(4, new ListNode(
    4, new ListNode(4)
)))))
let res = removeElements(node, 4)
console.log(res)