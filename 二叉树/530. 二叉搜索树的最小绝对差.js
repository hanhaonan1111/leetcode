/**
 * 给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。
 * 差值是一个正数，其数值等于两值之差的绝对值。
*/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
//正式代码
//法1:直白想法
var getMinimumDifference1 = function (root) {
    if (!root) return 0
    let li = []
    function LCR(node, li) {
        if (node) {
            LCR(node.left, li)
            li.push(node.val)
            LCR(node.right, li)
        }
    }
    LCR(root, li)
    console.log(li);
    let min = Infinity
    for (let i = 0; i < li.length - 1; i++) {
        let start = li[i]
        let end = li[i + 1]
        min = Math.min(min, Math.abs(start - end))
    }
    return min
};

// 法2:回溯法
function getMinimumDifference2(root) {
    let cur = root
    let pre = null
    let min = Infinity
    function DG(node) {
        if (!node) return
        DG(node.left)
        cur = node
        if (pre) {
            min = Math.min(min, Math.abs(pre.val - node.val))
        }
        pre = cur
        DG(node.right)
    }
    DG(root)
    console.log(min);
    return min
}
// 法3:广度优先
function getMinimumDifference(root) {
    let pre = null
    let cur = root
    let min = Infinity
    let queue = []
    while (cur || queue.length) {
        if (cur) {
            queue.push(cur)
            cur = cur.left
        } else {
            cur = queue.pop()
            if (pre) {
                min = Math.min(min, Math.abs(pre.val - cur.val))
            }
            pre = cur
            cur = cur.right
        }
    }
    return min
}
//测试数据
let root1 = new TreeNode(5,
    new TreeNode(4),
    new TreeNode(6, new TreeNode(15), new TreeNode(7)))
let res = getMinimumDifference(root1)
console.log(res);