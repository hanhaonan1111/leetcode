/**给你两棵二叉树： root1 和 root2 。
想象一下，当你将其中一棵覆盖到另一棵之上时，两棵树上的一些节点将会重叠（而另一些不会）。
你需要将这两棵树合并成一棵新二叉树。合并的规则是：如果两个节点重叠，那么将这两个节点的值
相加作为合并后节点的新值；否则，不为 null 的节点将直接作为新二叉树的节点。
返回合并后的二叉树。
注意: 合并过程必须从两个树的根节点开始。
  */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
//正式代码
// 法1:广度优先
// 在原来的书上进行修复即可!
var mergeTrees = function (root1, root2) {
    if (!root1) return root2
    if (!root2) return root1

    let queue = []
    queue.push(root1)
    queue.push(root2)

    while (queue.length) {
        // 此时node1,node2均不为null
        let node1 = queue.shift()
        let node2 = queue.shift()
        // 改造node1
        node1.val += node2.val
        // 都有左节点
        if (node1.left && node2.left) {
            queue.push(node1.left, node2.left)
        }
        // 都有右节点
        if (node1.right && node2.right) {
            queue.push(node1.right, node2.right)
        }

        if (!node1.left && node2.left) {
            node1.left = node2.left

        }
        if (!node1.right && node2.right) {
            node1.right = node2.right
        }
    }
    return root1
};



// 测试数据
let root1 = new TreeNode(1,
    new TreeNode(2, new TreeNode(15, new TreeNode(16, new TreeNode(17),),), new TreeNode(7)),
    new TreeNode(3, new TreeNode(15,),))
let root2 = new TreeNode(1,
    new TreeNode(2, new TreeNode(15, new TreeNode(16, new TreeNode(17),),), new TreeNode(7)),
    new TreeNode(3, new TreeNode(15,),))
mergeTrees(root1, root2)