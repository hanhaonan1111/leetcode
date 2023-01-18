/**给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

//正式数据
var invertTree = function (node) {
    function Recursion(node) {
        if (node.left || node.right) {
            let other
            other = node.left
            node.left = node.right
            node.right = other
            node.left && Recursion(node.left)
            node.right && Recursion(node.right)
        }
    }
    if (!node) {
        return node
    } else {
        Recursion(node)
        return node
    }
};
// 测试数据
let root = new TreeNode(1,
    new TreeNode(0, new TreeNode(5, new TreeNode(7), new TreeNode(12)), new TreeNode(8)),
    new TreeNode(-9))
let res = invertTree(root)
console.log(res)