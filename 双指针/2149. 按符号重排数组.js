/**
 * 给你一个下标从 0 开始的整数数组 nums ，数组长度为 偶数 ，由数目相等的正整数和负整数组成。
 你需要 重排 nums 中的元素，使修改后的数组满足下述条件：
任意 连续 的两个整数 符号相反
对于符号相同的所有整数，保留 它们在 nums 中的 顺序 。
重排后数组以正整数开头。
重排元素满足上述条件后，返回修改后的数组。
 */

// 法1：双指针
/**
 * 使用2个指针，一个指向正数，另一个指向负数。
 * 准备一个空数组
 * 
 */
function rearrangeArray(nums) {
    let res = new Array(nums.length)
    let start = 0
    let end = 1
    for (const val of nums) {
        if (val > 0) {
            res[start] = val
            start = start + 2 // 固定正数的位置
        } else {
            res[end] = val
            end = end + 2
        }
    }
    return res
};
// 法2： 暴力解法
function rearrangeArray1(li) {
    let z = []
    let fu = []
    let res = []
    li.forEach(v => {
        if (v > 0) { z.push(v) } else { fu.push(v) }
    })
    for (let i = 0; i < z.length; ++i) {
        res.push(z[i], fu[i])
    }
    return res
}
//测试数据
let res = rearrangeArray([28, -41, 22, -8, -37, 46, 35, -9, 18, -6, 19, -26, -37, -10, -9, 15, 14, 31])
console.log(res);