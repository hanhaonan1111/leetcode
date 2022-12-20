/**
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
 * 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组
 *  [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存
 * 在符合条件的子数组，返回 0 。
 */

// 法1:暴力法
/**
 * 
 * 思路正确,但一定会超时.
 */
var minSubArrayLen1 = function (target, nums) {
    let result = Infinity
    let total = 0
    for (let i = 0; i < nums.length; i++) {
        let ele = nums[i]
        total = ele
        if (total >= target) {
            result = Math.min(result, 1)
            return 1
        }
        for (let j = 1 + i; j < nums.length; j++) {
            const element = nums[j];
            total += element
            if (total >= target) {
                result = Math.min(result, j - i + 1)
            }
        }
    }
    return result === Infinity ? 0 : result
};



// 法2:滑动窗口
function minSubArrayLen(target, nums) {
    let res = Infinity
    let total = 0
    for (let start = 0; start < nums.length; start++) {

        let eleStart = nums[start];
        total = eleStart
        let end = start + 1
        if (total >= target) return 1

        while (total < target && end < nums.length) {
            total += nums[end++]
        }
        if (total >= target) {
            // 思考:  这里为什么不是 res = Math.min(res, end - start+1) ???
            /**
             *   
             * 答:当while循环执行结束之后,end会自增(end++表示先使用再自增).
             */
            res = Math.min(res, end - start)
        }
    }
    return res === Infinity ? 0 : res
}
let res = minSubArrayLen(7, [6, 3, 1, 2, 4, 3])
console.log(res, 'res')