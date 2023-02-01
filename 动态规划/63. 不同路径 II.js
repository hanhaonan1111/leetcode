/**
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish”）。
 * 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
 * 网格中的障碍物和空位置分别用 1 和 0 来表示。
 */
// 正式代码
var uniquePathsWithObstacles = function (path) {
    if (path[0][0]) { return 0 }
    if (path[path.length - 1][path[path.length - 1].length - 1] === 1) { return 0 }
    let dp = []
    let init = []
    let f = true
    for (let row = 0; row < path[0].length; row++) {
        if (f && path[0][row] === 0) {
            init.push(1)
        } else {
            f = false
            init.push(0)
        }

    }
    dp.push(init)
    init = []
    f = true
    for (let j = 1; j < path.length; j++) {
        let col = path[j][0]
        if (f && col === 0) {
            init.push([1])
        } else {
            f = false
            init.push([0])
        }
    }
    dp.push(...init)
    for (let r = 1; r < path.length; r++) {
        for (let c = 1; c < path[r].length; c++) {
            if (path[r][c] === 1) {
                dp[r][c] = 0
            } else {
                dp[r][c] = dp[r - 1][c] + dp[r][c - 1]
            }
        }
    }
    console.log(dp);
    return dp[dp.length - 1][dp[dp.length - 1].length - 1]
};
//测试数据
let res = uniquePathsWithObstacles([[0, 0], [1, 1], [0, 0]])
console.log(res, 'RES');
