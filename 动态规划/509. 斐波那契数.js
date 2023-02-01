/**
 * 斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。
 * 该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
 * F(0) = 0，F(1) = 1
 * F(n) = F(n - 1) + F(n - 2)，其中 n > 1
 * 给定 n ，请计算 F(n) 。 
*/
// 法1:递归法
var fib1 = function (n) {
    function DG(n) {
        if (n <= 1) return n
        // 大于1
        return DG(n - 1) + DG(n - 2)
    }
    return DG(n)
};

// 法2: 遍历法
function fib(n) {
    let res = [0, 1]
    let i = 2
    while (i <= n) {
        res[i] = res[i - 1] + res[i - 2]
        i++
    }
    return res[n]
}

//测试数据
let res = fib(8)
console.log(res, 'RES');