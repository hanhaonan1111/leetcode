
/**
 * 
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。 
 */

// 法一:暴力法则
var removeElement1 = function (nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (val === nums[i]) {
            for (let j = 1 + i; j < nums.length; j++) {
                nums[j - 1] = nums[j]
            }
            nums.length--
            i--
        }
    }
    return nums.length
};


// 法二:快慢指针  
/**
 *  思路(快慢指针思想):
 *          1.当快指针指向的值等于目标值时,慢指针不走.
 *          2.当快指针指向的值不等于目标值时,同时走,且进行赋值操作.
 */
function removeElement(nums, val) {
    let slow = 0
    for (let fast = 0; fast < nums.length; ++fast) {
        if (val !== nums[fast]) {
            nums[slow] = nums[fast]
            slow++
        }
    }
    return slow
};
let res = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)
console.log(res)