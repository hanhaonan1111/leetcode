/**
 * 给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬
 * 需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。
 * 你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。
 * 请你计算并返回达到楼梯顶部的最低花费。 
 * */

var minCostClimbingStairs = function (cost) {
    // 到达第1阶和第2阶梯时候,需要消费的体力最小值
    let dp = [0, 0]
    for (let steps = 2; steps <= cost.length; steps++) {
        dp[steps] = Math.min(dp[steps - 1] + cost[steps - 1], dp[steps - 2] + cost[steps - 2])

    }
    return dp[dp.length - 1]

};
//测试数据
let res = minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])
console.log(res);