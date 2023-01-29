/**
 * 给你一个含重复值的二叉搜索树（BST）的根节点 root ，找出并返回 BST 中的所有 众数（即，出现频率最高的元素）。
 * 如果树中有不止一个众数，可以按 任意顺序 返回。
 * 假定 BST 满足如下定义：
 * 结点左子树中所含节点的值 小于等于 当前节点的值
 * 结点右子树中所含节点的值 大于等于 当前节点的值
 * 左子树和右子树都是二叉搜索树
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
//正式代码
//法1:广度优先 
var findMode = function (root) {
    let map = new Map()

    let queue = [root]
    while (queue.length) {
        let top = queue.shift()
        if (map.get(top.val) !== undefined) {
            map.set(top.val, 1 + map.get(top.val))
        } else {
            map.set(top.val, 0)
        }
        top.left && queue.push(top.left)
        top.right && queue.push(top.right)
    }
    let li = Array.from(map)
    li.sort((a, b) => b[1] - a[1])
    let maxCount = li[0][1]
    let res = []
    li.map(v => {
        if (v[1] === maxCount) {
            res.push(v[0])
        }
    })
    return res
};

//测试数据
let root1 = new TreeNode(15,
    new TreeNode(5, new TreeNode(15)),
    new TreeNode(5, new TreeNode(5), new TreeNode(15)))
let res = findMode(root1)
console.log(res);