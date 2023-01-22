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
var mergeTrees1 = function (root1, root2) {
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
// 同上
function mergeTrees2(r1, r2) {
    if (!r1) { return r2 }
    if (!r2) { return r1 }
    let queue = [r1, r2]
    while (queue.length) {
        let n1 = queue.shift()
        let n2 = queue.shift()

        n2.val += n1.val
        if (n1.left && n2.left) {
            queue.push(n1.left, n2.left)
        }
        if (n1.right && n2.right) {
            queue.push(n1.right, n2.right)
        }
        if (n1.left && !n2.left) {
            n2.left = n1.left
        }
        if (n1.right && !n2.right) {
            n2.right = n1.right
        }


    }
    return r2


}



// 法2:深度优先(递归)
function mergeTrees4(r1, r2) {
    if (!r1) return r2
    if (!r2) return r1
    // 走到这里说明r1和r2都没有问题
    function DG(r1, r2) {
        if (r1.left && r2.left) {
            DG(r1.left, r2.left)
        }
        if (r1.right && r2.right) {
            DG(r1.right, r2.right)
        }
        if (!r1.left && r2.left) {
            r1.left = r2.left
        }
        if (!r1.right && r2.right) {
            r1.right = r2.right
        }
        r1.val += r2.val

    }
    DG(r1, r2)
    console.log(r1);
    return r1
}
//优化
/**
 * 递归三部曲:
 *      1.确定入参
 *      2.确定终止条件
 *      3.确定单层的逻辑
 */
function mergeTrees(r1, r2) {
    if (!r1) return r2
    if (!r2) return r1
    function DG(r1, r2) {
        if (!r1 && r2) {
            return r2
        }
        if (!r2) { return r1 }
        r1.val += r2.val
        r1.left = DG(r1.left, r2.left)
        r2.right = DG(r1.right, r2.right)
        return r1

    }
    return DG(r1, r2)
}
// 测试数据
let root1 = new TreeNode(1,
    new TreeNode(2, new TreeNode(15, new TreeNode(16, new TreeNode(17),),), new TreeNode(7)),
    new TreeNode(3, new TreeNode(15,),))
let root2 = new TreeNode(1,
    new TreeNode(2, new TreeNode(15, new TreeNode(16, new TreeNode(17),),), new TreeNode(7)),
    new TreeNode(3, new TreeNode(15,),))
let res = mergeTrees(root1, root2)
console.log(res);