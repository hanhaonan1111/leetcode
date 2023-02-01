/**
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
 * 问总共有多少条不同的路径？
 */
var uniquePaths = function (m1, n1) {
    // m是行 n是列
    let dp = [new Array(n1).fill(1)]
    for (let m = 1; m < m1; m++) {
        let row = [1]
        for (let j = 1; j < n1; j++) {
            row[j] = row[j - 1] + dp[m - 1][j]
        }
        dp.push(row)
    }
    return dp[dp.length - 1][dp[dp.length - 1].length - 1]
};
uniquePaths(3, 7)