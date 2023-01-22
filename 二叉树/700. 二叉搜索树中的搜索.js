/**
 * 给定二叉搜索树（BST）的根节点 root 和一个整数值 val。.
 * 你需要在 BST 中找到节点值等于 val 的节点。 返回以该节点为根的子树。
 * 如果节点不存在，则返回 null 。
*/
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
//正式代码
// 法1:广度优先(迭代)
var searchBST1 = function (root, val) {
    if (!root) return root
    let queue = [root]
    while (queue.length) {
        let top = queue.shift()
        top.left && queue.push(top.left)
        top.right && queue.push(top.right)
        if (top.val === val) {
            // 根相等吗
            return top
        }
    }
    return null
};

// 法2:深度优先(递归)
/**
 * 递归三要素: 1.确定入参  2.确定结束条件  3.确定单层逻辑
 */
function searchBST(r, val) {
    if (!r) return r
    function DG(r) {
        if (!r) return null
        if (r.val === val) {
            return r
        }
        if (r.val > val) {
            return DG(r.left)
        }
        if (r.val < val) {
            return DG(r.right)
        }
    }
    return DG(r)
}
// 测试数据
let root1 = new TreeNode(4,
    new TreeNode(2, new TreeNode(1), new TreeNode(3)),
    new TreeNode(7))

let res = searchBST(root1, 7)
console.log(res);