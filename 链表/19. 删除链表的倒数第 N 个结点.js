//给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
// 正式代码
// 法1 : 双指针法
var removeNthFromEnd1 = function (head, n) {
    let node = new ListNode(-1, head)
    let fast = node   // 快指针
    let slow = node // 慢指针
    // 快指针先走几步
    while (n > 0) {
        fast = fast.next
        n--
    }
    // 两个指针一起走
    while (fast.next) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next ? slow.next.next : null
    return node.next
};

// 法2:栈法
function removeNthFromEnd2(node, n) {
    let queue = []
    let head = new ListNode(-1, node)
    while (head) {
        queue.push(head)
        head = head.next
    }
    for (let i = 0; i <= n; i++) {
        let pop = queue.pop()
        if (i == n) {
            pop.next = pop.next.next ? pop.next.next : null
        }
    }
    return queue[0] ? queue[0].next : node.next
}

// 法3: 计数法
var removeNthFromEnd = function (node, n) {
    let getLen = (node) => {
        let len = 0
        while (node) {
            len++
            node = node.next
        }
        return len
    }
    let pre = getLen(node) - n
    let dele = node
    if (pre === 0) {
        node = node.next
        return node
    }
    for (let i = 0; i < pre - 1; i++) {
        dele = dele.next
    };
    dele.next = dele.next.next ? dele.next.next : null
    return node
};


// 测试数据
let node = new ListNode(4, new ListNode(2, new ListNode(0, new ListNode(7, new ListNode(
    24, new ListNode(-4)
)))))
let res = removeNthFromEnd(node, 1)
console.log(res, 'res')