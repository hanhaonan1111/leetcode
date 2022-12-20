
/**
 * 
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，
 * 写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 */

let search = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let middle = parseInt(left + (right - left) / 2)
        if (nums[middle] < target) {
            left = middle + 1
        }
        else if (nums[middle] > target) {
            right = middle - 1
        }
        else {
            return middle
        }
    }
    return -1
};

let res = search([-1, 0, 3, 5, 9, 12], 2)
console.log(res, 'res');