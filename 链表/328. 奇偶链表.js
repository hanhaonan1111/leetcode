/**
 * 给定单链表的头节点 head ，将所有索引为奇数的节点和索引为偶数的节点分别组合在一起
 * ，然后返回重新排序的列表。
  * 第一个节点的索引被认为是 奇数 ， 第二个节点的索引为 偶数 ，以此类推。
 * 请注意，偶数组和奇数组内部的相对顺序应该与输入时保持一致。
 * 
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
// 正式代码
var oddEvenList = function (node) {
    let link = node
    let flag = true
    let old = new ListNode(-1)    // 奇数
    let old2 = old
    let even = new ListNode(0) // 偶数
    let even2 = even
    while (link) {
        if (flag) {
            flag = false
            // 奇数
            old.next = new ListNode(link.val)
            old = old.next
        } else {
            flag = true
            // 偶数
            even.next = new ListNode(link.val)
            even = even.next
        }
        link = link.next
    }
    old.next = even2.next ? even2.next : null
    return old2.next
};



// 测试数据
let node = new ListNode(4, new ListNode(2, new ListNode(0, new ListNode(7, new ListNode(
    24, new ListNode(-4)
)))))

oddEvenList(node)





