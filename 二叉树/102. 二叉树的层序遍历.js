/**给你二叉树的根节点 root ，返回其节点值的 层序遍历 。
 *  （即逐层地，从左到右访问所有节点）。
*/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

//正式数据
var levelOrder = function (root) {
    let queue = []
    let res = []
    root && queue.push(root)
    while (queue.length > 0) {
        let continer = []
        let len = queue.length
        //循环的终止条件不能不生是queue.length;必须是一个准确的数字.想想为什么?
        for (let i = 0; i < len; i++) {
            let head = queue.shift()
            continer.push(head.val)
            // 因为[]是复杂数据类型,这里会直接影响循环终止的条件
            if (head.left) queue.push(head.left)
            if (head.right) queue.push(head.right)
        }
        res.push([...continer])
    }
    console.log(res, 'RES');
    return res
};
// 测试数据
let root = new TreeNode(1,
    new TreeNode(0, new TreeNode(5, new TreeNode(7), new TreeNode(12)),
        new TreeNode(8)), new TreeNode(-9))
console.log(root);
let res = levelOrder(root)

console.log(res)