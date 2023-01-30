/**
 * 给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。
 * 一般来说，删除节点可分为两个步骤：
 * 首先找到需要删除的节点；
 * 如果找到了，删除它。
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
//正式代码
// 
var deleteNode1 = function (root, target) {
    function DG(node) {
        if (!node) return null
        // 遍历右边
        if (node.val < target) {
            node.right = DG(node.right)
            return node
        }
        // 遍历左边
        if (node.val > target) {
            node.left = DG(node.left)
            return node
        }
        if (node.val === target) {
            if (!node.left) {
                // 没有左边
                return node.right
            }
            else if (!node.right) {
                //没有右边
                return node.left
            }
            else if (!node.right && !node.left) {
                // 叶子节点
                return null
            } else {
                // 子节点
                let cur = node.right
                while (cur.left) {
                    cur = cur.left
                }
                console.log(node, cur, '{}');
                cur.left = node.left
                node = node.right
                return node
            }
        }
    }
    return DG(root)

};
//理清思路
function deleteNode(node, key) {
    function DG(node) {
        if (!node) return null

        if (node.val > key) {
            node.left = DG(node.left)
            return node
        }
        if (node.val < key) {
            node.right = DG(node.right)
            return node
        }
        if (node.val === key) {
            if (!node.left) {
                return node.right
            } else if (!node.right) {
                return node.left
            } else if (!node.left && !node.right) {
                return null
            } else {
                // node 是被删节点
                let cur = node.right
                while (cur.left) {
                    cur = cur.left
                }
                // cur是替代节点
                cur.left = node.left
                node = node.right
                return node
            }
        }
    }
    return DG(node)
}

//测试数据
let root = new TreeNode(5,
    new TreeNode(3, new TreeNode(2), new TreeNode(4)),
    new TreeNode(6, null, new TreeNode(7)))
let res = deleteNode(root, 4)
console.log(res, 'res');       