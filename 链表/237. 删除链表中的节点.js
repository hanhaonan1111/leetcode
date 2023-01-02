/**
 * 有一个单链表的 head，我们想删除它其中的一个节点 node。
 * 给你一个需要删除的节点 node 。你将 无法访问 第一个节点  head。
 * 链表的所有值都是 唯一的，并且保证给定的节点 node 不是链表中的最后一个节点。
 * 删除给定的节点。注意，删除节点并不是指从内存中删除它。这里的意思是：
 * 
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
// 正式代码
var deleteNode = function (node, t) {
    let head = node
    while (node?.next) {
        if (node.next.val === t) {
            node.next = node.next.next ? node.next.next : null
        }
        node = node.next
    }
    return head
};
// 测试数据
let node = new ListNode(4, new ListNode(2, new ListNode(0, new ListNode(7, new ListNode(
    24, new ListNode(-4)
)))))
deleteNode(node, 7)