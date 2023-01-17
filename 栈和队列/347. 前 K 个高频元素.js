/**
 * 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k
 *  高的元素。你可以按 任意顺序 返回答案。
 */

var topKFrequent = function (nums, k) {
    let map = new Map()
    let res = []
    for (const val of nums) {
        if (map.get(val)) {
            map.set(val, map.get(val) + 1)
        } else {
            map.set(val, 1)
        }
    }

    map = [...map].sort((a, b) => b[1] - a[1])
    for (let i = 0; i < k; ++i) {
        res.push(map[i][0])
    }
    console.log(res, 'RES');
    return res
};

topKFrequent([1, 1, 1, 2, 2, 3], 2)