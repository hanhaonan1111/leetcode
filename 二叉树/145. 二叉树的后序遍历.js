/**给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历  */

/**
 * 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// 正式代码
// 法1:递归法
var postorderTraversal = function (root) {
    let res = []
    function LRC(root, res) {
        if (root) {
            LRC(root.left, res)
            LRC(root.right, res)
            res.push(root.val)
        }
    }
    LRC(root, res)
    return res
};
let root = new TreeNode(1, new TreeNode(0, null, new TreeNode(8)), new TreeNode(-9))
let res = postorderTraversal(root)
console.log(res);