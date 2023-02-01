/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
*/

// 法1:递归法(超时!)
var climbStairs2 = function (n) {
    function DG(n) {
        if (n === 2 || n === 1) return n
        return DG(n - 1) + DG(n - 2)
    }
    return DG(n)
};


// 法2:迭代
function climbStairs1(n) {
    n--
    let dp = [1, 2]
    if (n < 2) { return dp[n] }
    let start = dp.length
    for (let i = start; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
}

// 优化
function climbStairs(n) {
    let dp = [1, 2]
    if (n < 3) { return dp[n - 1] }
    for (let i = 3; i <= n; i++) {
        let res = dp[0] + dp[1]
        dp[0] = dp[1]
        dp[1] = res
    }
    return dp[1]
}
//测试数据
let res = climbStairs(3)
console.log(res);