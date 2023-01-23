/**给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。
有效 二叉搜索树定义如下：
节点的左子树只包含 小于 当前节点的数。
节点的右子树只包含 大于 当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
//正式代码
// 法1:深度优先
var isValidBST1 = function (root) {
    let min = -Infinity
    let f = true
    function DG(node) {
        if (!node) return
        DG(node.left)
        if (min < node.val) {
            min = node.val
        } else {
            f = false
        }
        DG(node.right)
    }
    DG(root)
    return f
};
// 法2:常规方法(中序遍历,数据递增吗?)
function isValidBST1(root) {
    let queue = []
    function DG(node, queue) {
        if (!node) return
        DG(node.left, queue)
        queue.push(node.val)
        DG(node.right, queue)
    }
    DG(root, queue)
    let f = true
    console.log(queue);
    for (let i = 0; i < queue.length - 1; ++i) {
        let first = queue[i]
        let second = queue[1 + i]

        if (first >= second) {
            f = false
        }
    }
    return f
}


// 测试数据
// let root1 = new TreeNode(5,
//     new TreeNode(4),
//     new TreeNode(6, new TreeNode(15), new TreeNode(7)))
let root1 = new TreeNode(0, null, new TreeNode(0))
console.log(root1);
let res = isValidBST(root1)
console.log(res, '{}{}');