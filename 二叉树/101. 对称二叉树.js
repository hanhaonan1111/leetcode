/**给你一个二叉树的根节点 root ， 检查它是否轴对称。 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

//正式代码
var isSymmetric = function (root) {
    if (!root) return true
    function Digui(left, right) {
        //详尽描述3种情况
        if (!left && !right) return true
        if ((!left && right) || (left && !right)) {
            return false
        }
        if (left.val != right.val) {
            return false
        }
        return Digui(left.left, right.right) && Digui(left.right, right.left)
    }


    let res = Digui(root.left, root.right)
    console.log(res, 'RES');
    return res
}



// 测试数据
let root = new TreeNode(1,
    new TreeNode(0, new TreeNode(5, new TreeNode(7), new TreeNode(12)), new TreeNode(8)),
    new TreeNode(-9))
let res = isSymmetric(root)
console.log(res)