/**给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。
 * 你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。 
 * */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
// 正式代码

var swapPairs = function (node) {
    let slow = node
    let fast = node.next
    let other = null
    while (fast) {
        // 交换节点的值,然后slow fast的值进行更新
        other = fast.val
        fast.val = slow.val
        slow.val = other
        slow = fast.next ? fast.next : null
        fast = fast.next?.next ? fast.next?.next : null
    }
    console.log(node);
    return node
};
// 测试数据
let node = new ListNode(4, new ListNode(2, new ListNode(0, new ListNode(7, new ListNode(
    24, new ListNode(-4)
)))))
swapPairs(node)