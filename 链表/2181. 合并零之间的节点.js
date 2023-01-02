/**给你一个链表的头节点 head ，该链表包含由 0 分隔开的一连串整数。
 * 链表的 开端 和 末尾 的节点都满足 Node.val == 0 。
对于每两个相邻的 0 ，请你将它们之间的所有节点合并成一个节点，
其值是所有已合并节点的值之和。然后将所有 0 移除，修改后的链表不应该含有任何 0 。
 返回修改后链表的头节点 head 。 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
// 正式代码
// 法1 :模拟
let mergeNodes1 = function (head) {
    let total = 0
    let link = head
    let cur = head
    while (link) {
        if (link.val === 0) {
            if (total !== 0) {
                cur.next = new ListNode(total, link)
                cur = link  // 当前0节点
                total = 0   // 初始化总数
            }
            else {
                cur = link  // 当前0节点
                total = 0   // 初始化总数
            }
        }
        total += link.val
        link = link.next
    }
    link = head
    while (link) {
        if (link.next.val === 0) {
            link.next = link.next.next ? link.next.next : null
        }
        link = link.next
    }
    return head.next ? head.next : null
};
// 法2:(模拟)创新版
let mergeNodes2 = function (head) {
    let total = 0
    let tail = new ListNode(-1)
    let tailNode = tail
    while (head) {
        if (head.val === 0) {
            if (total !== 0) {
                tailNode.next = new ListNode(total, null)
                total = 0
                tailNode = tailNode.next
            }
        }
        head = head.next
        total = total + head?.val
    }
    return tail.next
};
// 法3 :  快慢指针
let mergeNodes = function (head) {
    let fast = head.next
    let slow = head
    let slowest = slow
    let total = 0
    while (fast) {
        if (!fast.next) {
            slow.next = null
        }
        if (fast.val !== 0) {
            total += fast.val
        } else {
            slow.val = total
            slow = slow.next
            slowest = slowest.next
            total = 0
        }
        fast = fast.next
    }
    return head
};
// 测试数据
let node = new ListNode(0, new ListNode(1, new ListNode(0, new ListNode(9, new ListNode(
    0, new ListNode(-4, new ListNode(0))
)))))

let res = mergeNodes(node)
console.log(res, 'ress');







