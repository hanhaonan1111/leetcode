/**
 * 给定两个整数数组 inorder 和 postorder ，其中 inorder 
 * 是二叉树的中序遍历， postorder 是同一棵树的后序遍历，请你构造并返
 * 回这颗 二叉树 。 
 * */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
//正式代码
// 法1:循环
var buildTree = function (LCR, LRC) {
    let root = LRC[LRC.length - 1]
    let res = new TreeNode(root);

    let index = LCR.findIndex(v => v === root)
    let lf = LCR.slice(0, index)
    let ri = LCR.slice(index + 1)
    console.log(lf, ri);


};

// 测试数据
buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])