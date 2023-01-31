/**
 * 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
 * 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公
 * 共祖先表示为一个结点 x，满足 
 * x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

//正式代码
// 法1:迭代
var lowestCommonAncestor1 = function (root, p, q) {
    while (root) {
        if (root.val > p.val && root.val > q.val) {
            root = root.left
        }
        else if (root.val < p.val && root.val < q.val) {
            root = root.right
        } else {
            return root
        }
    }
};
// 法2:递归
function lowestCommonAncestor(root, p, q) {
    function DG(node) {
        if (node.val > p.val && node.val > q.val) {
            return DG(node.left)
        } else if (node.val < p.val && node.val < q.val) {
            return DG(node.right)
        } else {
            return node
        }
    }
    return DG(root)
}

// 测试数据
// let root = new TreeNode(6,
//     new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3), new TreeNode(5))),
//     new TreeNode(8, new TreeNode(7), new TreeNode(9)))
let root = new TreeNode(2, new TreeNode(1))
let res = lowestCommonAncestor(root, new TreeNode(2), new TreeNode(1))
console.log(res)