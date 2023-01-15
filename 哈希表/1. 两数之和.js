/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  
 * 的那 两个 整数，并返回它们的数组下标。你可以假设每种输入只会对应一个答案。但是，
 * 数组中同一个元素在答案里不能重复出现。你可以按任意顺序返回答案。
 */


// 法1:暴力破解法
var twoSum1 = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i]
        for (let j = i + 1; j < nums.length; j++) {
            let other = nums[j]
            if (cur + other === target) {
                return [i, j]
            }
        }
    }
};
// 法2 哈希表
var twoSum = function (nums, target) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            //当前数字是否是之前某个数字所需要的值,是则返回!
            return [map.get(nums[i]), i]

        } else {
            // 将索引对应需要的数字和索引存放入哈希表
            map.set(target - nums[i], i)
        }
    }
}

let res = twoSum([2, 7, 11, 15], 9)
console.log(res, 'resUlt');