/** 
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
 * 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共
 * 祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大
 * （一个节点也可以是它自己的祖先）。”
*/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

//正式代码
//方法1:晦涩难懂
var lowestCommonAncestor1 = function (root, p, q) {
    let res = null
    function DG(node) {
        if (!node) { return false }

        let left = DG(node.left)
        let right = DG(node.right)
        if ((left && right) || ((node.val === p.val || node.val === q.val) && (left || right))) {
            res = node
        }
        return left || right || (node.val === p.val || node.val === q.val)

    }
    DG(root)
    return res
};
//方法2:易懂(递归)
function lowestCommonAncestor(root, p, q) {
    function DG(node) {
        if (node === null) { return null }
        //当存在符合条件的值时
        if (node.val === p.val || node.val === q.val) {
            return node
        }

        let left = DG(node.left)// 左边要么为null 要么有符合条件的值
        let right = DG(node.right)// 左边要么为null 要么有符合条件的值

        if (left && right) {
            return node
        }
        if (left === null) {
            return right
        } else {
            return left
        }
    }
    return DG(root)
}

// 测试数据
let root = new TreeNode(1,
    new TreeNode(0, new TreeNode(5, new TreeNode(7), new TreeNode(12)), new TreeNode(8)),
    new TreeNode(-9))
let res = lowestCommonAncestor(root, new TreeNode(7), new TreeNode(-9))
console.log(res)