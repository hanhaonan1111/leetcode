/**
 * 给你一棵二叉树的根节点 root ，请你返回 层数最深的叶子节点的和 。
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
// 正式代码
// 法1: 广度优先
var deepestLeavesSum = function (root) {
    let total = 0
    if (!root) return total
    let queue = [root]
    while (queue.length) {
        let node = queue.shift()
        console.log(node);
        if (!node.left && !node.right) {
            // 叶子节点
            total += node.val
        }
        node.left && queue.push(node.left)
        node.right && queue.push(node.right)
    }
    console.log(total, 'TOTAL');
    return total
};

// 测试数据
let root = new TreeNode(1, new TreeNode(2, new TreeNode(15), new TreeNode(7)),
    new TreeNode(9))
let res = deepestLeavesSum(root)
console.log(res);