/**
 * 给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。
 * 一般来说，删除节点可分为两个步骤：
 * 首先找到需要删除的节点；
 * 如果找到了，删除它。
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
//正式代码
var deleteNode = function (root, val) {
    let del = null

    function address(node) {
        if (node.left) {
            return address(node.left)
        } else {
            return node
        }

    }
    function DG(node) {
        if (node.val < val) {
            DG(node.right)
        } else if (node.val > val) {
            DG(node.left)
        } else {
            if (!node) return root
            // 找到了目标值
            if (node.right) {
                del = node
                let target = address(node.right)
                node.val = target.val
            }


        }
    }

    DG(root)
    console.log('RES', root);
};
//测试数据
let root = new TreeNode(5,
    new TreeNode(3, new TreeNode(2), new TreeNode(4)),
    new TreeNode(6, null, new TreeNode(7)))
let res = deleteNode(root, 3)
console.log(res);       