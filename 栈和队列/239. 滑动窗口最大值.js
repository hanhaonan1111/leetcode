/**
 * 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到
 * 数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动
 * 一位。返回 滑动窗口中的最大值 。
 */
// 方法1:暴力
// 思路可行,但是抽出时间限制! leetcode不通过
function maxSlidingWindowBug(nums, steps) {
    let stack = []
    let res = []
    for (let start = 0; start <= nums.length - steps; start++) {
        stack = []
        // 尾指针
        let end = start - 1 + steps >= nums.length ? start : start - 1 + steps
        stack = nums.slice(start, end + 1)
        res.push(Math.max(...stack))
    }
    return res;
};
// 方法2:单调队列
var maxSlidingWindow = function (nums, k) {
    const n = nums.length;
    const q = [];
    for (let i = 0; i < k; i++) {
        // 1>=1
        while (q.length && nums[i] >= nums[q[q.length - 1]]) {
            q.pop();
        }
        q.push(i);
        /**
         * 
         */
        console.log(q);
    }

    // const ans = [nums[q[0]]];
    // for (let i = k; i < n; i++) {
    //     while (q.length && nums[i] >= nums[q[q.length - 1]]) {
    //         q.pop();
    //     }
    //     q.push(i);
    //     while (q[0] <= i - k) {
    //         q.shift();
    //     }
    //     ans.push(nums[q[0]]);
    // }
    // return ans;
};

// 测试数据
let res = maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);
console.log(res)