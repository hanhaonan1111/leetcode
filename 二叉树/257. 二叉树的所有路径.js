/**
 * 给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。
 * 叶子节点 是指没有子节点的节点。 
*/
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// 正式代码
// 法1:广度优先
var binaryTreePaths1 = function (root) {
    if (!root) return root
    let queue = [root]
    let routes = ['' + root.val]
    let res = []
    while (queue.length) {
        let firstRoute = routes.shift()
        let top = queue.shift()

        if (!top.left && !top.right) {
            // 叶子节点 
            res.push(firstRoute)
        }

        if (top.left) {
            queue.push(top.left)
            routes.push(firstRoute + '->' + top.left.val)
        }
        if (top.right) {
            queue.push(top.right)
            routes.push(firstRoute + '->' + top.right.val)
        }
    }
    return res

};

// 递归法
function binaryTreePaths(node) {

}
// 测试数据
let root = new TreeNode(1, new TreeNode(0, null, new TreeNode(8)), new TreeNode(-9))
let res = binaryTreePaths(root)
console.log(res);