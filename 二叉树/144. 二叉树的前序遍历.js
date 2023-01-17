//给你二叉树的根节点 root ，返回它节点值的 前序 遍历。


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// 正式代码
// 方法1:递归法
var preorderTraversal1 = function (root) {
    let res = []
    function CLR(node, res) {
        if (node) {
            res.push(node.val)
            CLR(node.left, res)
            CLR(node.right, res)
        }
    }
    CLR(root, res)
    return res
};
// 方法2:white遍历法
var preorderTraversal = function (root) {
    let stack = []
    let res = []
    if (!root) {
        return []
    }
    stack.push(root)

    while (stack.length > 0) {
        let top = stack.pop()
        res.push(top.val);
        if (top.right) {
            stack.push(top.right)
        }
        if (top.left) {
            stack.push(top.left)
        }
    }
    return res
};
// 测试数据

let root = new TreeNode(1, new TreeNode(0, null, new TreeNode(8)), new TreeNode(-9))
let res = preorderTraversal(root)
console.log(res);