/**
 * 给定二叉搜索树（BST）的根节点 root 和要插入树中的值 value ，将值插入二叉搜索树。 
 * 返回插入后二叉搜索树的根节点。 输入数据 保证 ，新值和原始二叉搜索树中的任意节点值都不同。
 * 注意，可能存在多种有效的插入方式，只要树在插入后仍保持为二叉搜索树即可。 你可以返回 任意有效
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
//正式代码
// 法1:递归
var insertIntoBST1 = function (root, val) {
    if (!root) return new TreeNode(val)
    function DG(node, val) {
        // 中
        if (node.val < val) {
            //大于顶点,往右边插入
            if (node.right) {
                DG(node.right, val) //右 
            } else {
                node.right = new TreeNode(val)
            }
        } else {
            if (node.left) {
                DG(node.left, val)
            }
            else {

                node.left = new TreeNode(val)
            }
        }
    }
    DG(root, val)
    return root
};
// 法2:递归
function insertIntoBST(root, val) {
    if (!root) return new TreeNode(val)
    let node = root

    while (node) {
        father = node
        if (node.val < val) {
            if (node.right) {
                node = node.right
            } else {
                node.right = new TreeNode(val)
                node = null
            }
        } else {
            if (node.left) { node = node.left }
            else {
                node.left = new TreeNode(val)
                node = null
            }
        }
    }
    return root
}
//测试数据
let root = new TreeNode(4,
    new TreeNode(2, new TreeNode(1), new TreeNode(3)),
    new TreeNode(7))
let res = insertIntoBST(root, 5)
console.log(res);          