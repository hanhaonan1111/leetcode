/**给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// 正式代码
// 法1: 广度优先
var isBalanced = function (root) {
    if (!root) {
        return true
    }
    function getDeath(node) {
        if (!node) {
            return 0
        }
        let queue = [node]
        let height = 0
        while (queue.length > 0) {
            let n = queue.length
            for (let i = 0; i < n; i++) {
                let top = queue.shift()
                top.left && queue.push(top.left)
                top.right && queue.push(top.right)
            }
            height++
        }
        return height
    }
    let leftHeight = getDeath(root.left)
    let rightHeight = getDeath(root.right)
    return Math.abs(leftHeight - rightHeight) < 2
};



// 测试数据
let root = new TreeNode(1,
    new TreeNode(2, new TreeNode(15, new TreeNode(16, new TreeNode(17),),), new TreeNode(7)),
    new TreeNode(3, new TreeNode(15,),))
console.log(root);
let res = isBalanced(new TreeNode(1))
console.log(res)
