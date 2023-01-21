/**给你二叉树的根节点 root 和一个整数目标和 
 * targetSum ，找出所有 从根节点到叶子节点 路
 * 径总和等于给定目标和的路径。
 * 叶子节点 是指没有子节点的节点。 
 * */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
// 正式代码
// 法1:广度优先
function pathSum1(node, target) {
    if (!node) return []
    let queue = [node]
    let values = [node.val]
    let path = [[node.val]]
    let res = []
    while (queue.length) {
        let topNode = queue.shift()
        let topVal = values.shift()
        let topPath = path.shift()
        if (topNode.left) {
            values.push(topVal + topNode.left.val)
            queue.push(topNode.left)
            // path.push(topPath + '->' + topNode.left.val)
            path.push([...topPath, topNode.left.val])
        }
        if (topNode.right) {
            values.push(topVal + topNode.right.val)
            queue.push(topNode.right)
            path.push([...topPath, topNode.right.val])
            // path.push(topPath + '->' + topNode.right.val)
        }
        if (!topNode.left && !topNode.right && topVal === target) {
            res.push(topPath)
        }

    }
    return res
};

//法2:深度优先
function pathSum(node, t) {
    if (!node) return []
    // 根节点存在
    let route = [node.val] // 用于存放所有的路径
    let count = node.val // 用于计数
    let res = [] // 存放结果
    function DG(node, route, count) {
        if (!node.left && !node.right && t === count) {
            res.push([...route])
            return
        }
        if (node.left) {
            count += node.left.val
            route.push(node.left.val)
            DG(node.left, route, count)
            count -= node.left.val
            route.pop()
        }
        if (node.right) {
            count += node.right.val
            route.push(node.right.val)
            DG(node.right, route, count)
            count -= node.right.val
            route.pop()
        }
    }
    DG(node, route, count)
    return res
}

// 测试数据
let root = new TreeNode(1, new TreeNode(2, new TreeNode(15), new TreeNode(7)),
    new TreeNode(9))
let res = pathSum(root, 10)

console.log(res);