/**给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
// 正式代码

// 法1 :双指针法
var reverseList1 = function (head) {
    let cur = head
    let pre = null// 用于记载前一个节点
    let node = null //用于记载原先下一个节点
    while (cur) {
        node = cur.next
        cur.next = pre
        pre = cur
        cur = node
    }
    return pre
};



// 测试数据
let node = new ListNode(4, new ListNode(2, new ListNode(0, new ListNode(7, new ListNode(
    24, new ListNode(-4)
)))))
let res = reverseList(node)
console.log(res)