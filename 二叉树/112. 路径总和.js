/**给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。
 * 判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值
 * 相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。
 * 叶子节点 是指没有子节点的节点。 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// 正式代码
// 法1 :递归法
var hasPathSum1 = function (node, target) {
    if (!node) return false
    let path = 0
    let flag = false
    function DG(node, path) {
        path += node.val// 当前节点的值
        if (path === target && !node.right && !node.left) {
            // 必须为叶子节点且路径之和为目标值
            flag = true
        }
        if (node.left) {
            DG(node.left, path)

        }
        if (node.right) {
            DG(node.right, path)
        }
        // 回溯算法
        path -= node.val

    }
    node && DG(node, path)
    return flag
};

// 法2:广度优先
function hasPathSum(node, target) {
    if (!node) return false
    let queue = [node]
    let res = [node.val]
    while (queue.length) {
        let top = queue.shift() // 被删的头结点
        let head_val = res.shift()// 被删的值 
        if (top.left) {
            res.push(head_val + top.left.val)
            queue.push(top.left)
        }
        if (top.right) {
            res.push(head_val + top.right.val)
            queue.push(top.right)
        }
        if (head_val === target && !top.left && !top.right) {
            return true
        }
    }
    return false
}
// 测试数据
let root = new TreeNode(1, new TreeNode(2))
let res = hasPathSum(root, 1)
console.log(res);
