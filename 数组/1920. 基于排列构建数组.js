/**
 * 给你一个 从 0 开始的排列 nums（下标也从 0 开始）。请你构建一个 同样长度 的数组 ans ，
 * 其中，对于每个 i（0 <= i < nums.length），都满足 ans[i] = nums[nums[i]] 。返回构建好的数组 ans 。
 * 从 0 开始的排列 nums 是一个由 0 到 nums.length - 1（0 和 nums.length - 1 也包含在内）的不同整数
 * 组成的数组。
 */



var buildArray = function (nums) {
    let res = []
    for (let i = 0; i < nums.length; i++) {
        res[i] = nums[nums[i]]
    }
    return res
};

buildArray([0, 2, 1, 5, 3, 4])