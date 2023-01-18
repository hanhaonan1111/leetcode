/**给你一个二叉树的根节点 root ， 检查它是否轴对称。 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

//正式代码
// 法1.深度优先
var isSymmetric1 = function (root) {
    if (!root) return true
    function Digui(left, right) {
        //详尽描述3种情况
        if (!left && !right) return true
        if ((!left && right) || (left && !right)) {
            return false
        }
        // 这里一定要判断不符合条件的情况
        if (left.val !== right.val) {
            return false
        }
        // 能走到这里,说明目前为止,所遍历的节点均对称!
        return Digui(left.left, right.right) && Digui(left.right, right.left)
    }
    let res = Digui(root.left, root.right)
    return res
}

// 法2:广度优先
var isSymmetric = function (root) {
    if (!root) return true
    let queue = [root.left, root.right]
    while (queue.length) {
        let len = queue.length
        for (let i = 0; i < len; i += 2) {
            let l = queue.shift()
            let r = queue.shift()
            if ((!l && r) || (!r && l)) return false
            if (l && r) {
                if (l.val !== r.val) return false
                queue.push(l.left, r.right)
                queue.push(l.right, r.left)
            }
        }
    }
    return true
}

// 测试数据
let root = new TreeNode(1,
    new TreeNode(0, new TreeNode(5, new TreeNode(7), new TreeNode(12)), new TreeNode(8)),
    new TreeNode(-9))
let res = isSymmetric(root)
console.log(res)