/**给你二叉树的根节点 root ，返回其节点值的 层序遍历 。
 *  （即逐层地，从左到右访问所有节点）。
*/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

//正式数据
var levelOrder = function (root) {

};
// 测试数据
let root = new TreeNode(1, new TreeNode(0, new TreeNode(5, new TreeNode(7), new TreeNode(12)), new TreeNode(8)), new TreeNode(-9))
let res = levelOrder(root)
console.log(res)