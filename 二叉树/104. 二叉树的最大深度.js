
/**
 * 给定一个二叉树，找出其最大深度。
二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
说明: 叶子节点是指没有子节点的节点。
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

//正式代码
// 法1:循环
var maxDepth1 = function (root) {
    if (!root) return 0
    let queue = [root]
    let count = 0
    while (queue.length) {
        let len = queue.length
        for (let i = 0; i < len; i++) {
            let head = queue.shift()
            head.left && queue.push(head.left)
            head.right && queue.push(head.right)
        }
        count++
    }
    return count
};

// 法2:递归 绕得很
function maxDepth(root) {
    if (!root) return 0
    function Digui(node) {
        if (node == null) {
            return 0
        }
        let lf = Digui(node.left)
        let ri = Digui(node.right)
        return Math.max(lf, ri) + 1
    }
    Digui(root)
}
// 测试数据
let root = new TreeNode(1,
    new TreeNode(0, new TreeNode(5, new TreeNode(7), new TreeNode(12)), new TreeNode(8)),
    new TreeNode(-9))
let res = maxDepth(root)
console.log(res)