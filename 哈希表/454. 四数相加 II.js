/**
 * 给你四个整数数组 nums1、nums2、nums3 和 nums4 ，数组长度都是 n ，请你计算有多少个元组 
 * (i, j, k, l) 能满足：
 * 0 <= i, j, k, l < n
 * nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0
 */

// 方法:哈希法
var fourSumCount = function (a, b, c, d) {
    let sumAB = new Map()
    let count = 0
    a.map(x => {
        b.forEach(y => {
            let sum1 = (x + y)
            // 设置值用于体现可以匹配的次数!
            sumAB.set(sum1, (sumAB.get(sum1) || 0) + 1)
        });
    })
    c.map(x => {
        d.forEach(y => {
            let sum2 = 0 - (x + y)
            if (sumAB.get(sum2)) {
                count = count + sumAB.get(sum2)
            }
        });
    })
    return count
};
fourSumCount(nums1 = [1, 2], nums2 = [-2, -1], nums3 = [-1, 2], nums4 = [0, 2])