/**
 * 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// 正式代码
// 法1:递归法
var inorderTraversal1 = function (root) {
    let res = []
    function LCR(root, res) {
        if (root) {
            LCR(root.left, res)
            res.push(root.val)
            LCR(root.right, res)
        }
    }
    LCR(root, res)
    return res
};

// 法2:栈+while循环
var inorderTraversal = function (root) {
    let stack = []
    let res = []
    if (!root) { return res }
    // 节点存在
    let cur = root // 当前指针
    while (cur || stack.length > 0) {
        if (cur) {
            stack.push(cur)
            cur = cur.left
        } else {
            cur = stack.pop()
            res.push(cur.val)
            cur = cur.right
        }
    }
    return res
};


// 测试数据

let root = new TreeNode(1, new TreeNode(0, null, new TreeNode(8)), new TreeNode(-9))
let res = inorderTraversal(root)
console.log(res);