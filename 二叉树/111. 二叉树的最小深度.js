/**给定一个二叉树，找出其最小深度。
最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
说明：叶子节点是指没有子节点的节点。
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

//正式代码 
// 法1:广度优先算法
function minDepth1(root) {
    if (!root) return root
    let queue = [root]
    let count = 0
    while (queue.length) {
        let len = queue.length
        for (let i = 0; i < len; i++) {
            let top = queue.shift()
            if (!top.left && !top.right) {
                // 终止流程!结束程序
                return ++count
            }
            top.left && queue.push(top.left)
            top.right && queue.push(top.right)
        }
        count++
    }
};

// 法2:深度优先算法!
function minDepth(root) {
    let count = 1
    function Dg(node) {
        if (!node.left && !node.right) {
            return
        }
        let left = Dg(node.left)
        let right = Dg(node.right)
        Math.min(left, right)

    }
    Dg(root)
};

// 测试数据
let root = new TreeNode(1,
    new TreeNode(2, new TreeNode(15), new TreeNode(7)),
    new TreeNode(3))
let res = minDepth(root)
console.log(res)
