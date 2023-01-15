/**
 * 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部
 * 条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：
 * 0 <= a, b, c, d < n
 * a、b、c 和 d 互不相同
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 * 你可以按 任意顺序 返回答案 。
 * 
 */
// 双指针+排序
var fourSum = function (list, target) {
    list = list.sort((a, b) => a - b)
    let res = []
    console.log(list);
    for (let i = 0; i < list.length - 3; i++) {
        // 这是对i去重
        if (i === 0 || list[i] !== list[i - 1]) {
            for (let k = 1 + i; k < list.length; k++) {
                // 这是对k去重if(k===1+i)此条件只在第一轮循环时,执行!
                if (k === 1 + i || list[k] !== list[k - 1]) {
                    let left = k + 1
                    let right = list.length - 1
                    while (left < right) {
                        let total = list[i] + list[k] + list[left] + list[right]
                        if (total > target) {
                            right--
                        } else if (total < target) {
                            left++
                        } else {
                            res.push([list[i], list[k], list[left], list[right]])
                            // 对两个指针去重
                            while (left < right && list[left] === list[left + 1]) {
                                left++
                            }
                            while (left < right && list[right] === list[right - 1]) {
                                right++
                            }
                            right--
                            left++
                        }
                    }
                }
            }
        }
    }
    return res
};

let res = fourSum([-1, 0, 1, 2, -1, -4], -1)
console.log(res);