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

}

// 测试数据
let root = new TreeNode(1, new TreeNode(2, new TreeNode(15), new TreeNode(7)),
    new TreeNode(9))
let res = pathSum(root, 10)
console.log(res);