/**
 * 给你一个按 非递减顺序 排序的整数数组 nums，返回 每
 * 个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
*/
// 法1:暴力破解法
var sortedSquares1 = function (nums) {
    nums = nums.map(v => {
        return v ** 2
    })
    nums.sort((a, b) => a - b)
    return nums
};
// 法2:双指针
function sortedSquares(li) {
    let res = []
    for (let i = 0, j = li.length - 1, pos = li.length - 1; i <= j;) {
        let start = li[i]
        let end = li[j]
        // 处理结果
        if (i >= j) {
            res[pos] = start ** 2
            return res
        }
        // 要考虑到等于的情况,且这种情况不能单独写成一下形式
        // 因为这样一次性减少一次对比!
        /**
         * else if (start ** 2 == end ** 2) {
         *   pos--
         *   i++
         * } 
         */
        else if (start ** 2 >= end ** 2) {
            res[pos] = start ** 2
            pos--
            i++

        } else if (start ** 2 <= end ** 2) {
            res[pos] = end ** 2
            pos--
            j--
        }
    }

}
// 测试数据
let res = sortedSquares([-7, -3, 2, 3, 11])
console.log(res, 'RES');