/**
 * 
 * 给你一个 m x n 大小的矩阵 grid ，由若干正整数组成。
 * 执行下述操作，直到 grid 变为空矩阵：
 * 从每一行删除值最大的元素。如果存在多个这样的值，删除其中任何一个。
 * 将删除元素中的最大值与答案相加。
 * 注意 每执行一次操作，矩阵中列的数据就会减 1 。
 * 返回执行上述操作后的答案。
 * 
 */
var deleteGreatestValue = function (grid) {
    let res = 0
    while (grid[0].length > 0) {
        let dels = []
        for (let i = 0; i < grid.length; i++) {
            let row = grid[i]
            let delNum = row.splice(row.findIndex(v => v === Math.max(...row)), 1)[0]
            dels.push(delNum)
        }
        res += Math.max(...dels)
    }
    console.log(res);
    return res
};

deleteGreatestValue([[10]])