/**
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，
 * 同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
 * 你返回所有和为 0 且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 */

// 法1:排序+双指针
var threeSum1 = function (nums) {
    nums = nums.sort((a, b) => a - b)
    let result = []
    console.log(nums, 'NUMS');
    for (let i = 0; i < nums.length - 2; i++) {
        let cur = nums[i]
        let left = i + 1
        let right = nums.length - 1
        // 只要是left<right 都成立
        // 不仅仅要对left和right进行去重,也要对主角进行处理
        if (i === 0 || nums[i] !== nums[i - 1]) {
            while (left < right) {
                let sum = cur + nums[left] + nums[right]
                if (sum > 0) {
                    right--
                } else if (sum < 0) {
                    left++
                } else {
                    result.push([cur, nums[left], nums[right]])

                    // 去重处理
                    while (left < right && nums[right] === nums[right - 1]) {
                        right--
                    }
                    while (left < right && nums[left] === nums[left + 1]) {
                        left++
                    }

                    left++
                    right--
                }
            }
        }
    }
    return result
};

let res = threeSum([-1, 0, 1, 2, -1, -4])
console.log(res, 'RES');
