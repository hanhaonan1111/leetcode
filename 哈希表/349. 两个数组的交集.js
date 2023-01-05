/*给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元
素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。*/


// 法1 耗时操作
var intersection1 = function (num1, num2) {
    let t1 //长度短的那个
    let t2
    if (num1.length < num2.length) {
        t1 = num1
        t2 = num2
    } else {
        t1 = num2
        t2 = num1
    }
    let set = new Set()
    for (let i = 0; i < t1.length; i++) {
        let ele = t1[i]
        let res = t2.findIndex(v => v === ele)
        if (res !== -1) {
            set.add(ele)
        }
    }
    return Array.from(set)
};

// 法2:"秀"操作
var intersection2 = function (num1, num2) {
    return Array.from(new Set(num1.filter(v => num2.includes(v))))
};

// 法3:排序+双指针
var intersection = function (num1, num2) {
    num1.sort((a, b) => a - b)
    num2.sort((a, b) => a - b)
    let len1 = num1.length
    let len2 = num2.length
    let index1 = 0, index2 = 0
    let res = new Set()
    while (index1 < len1 && index2 < len2) {
        let t1 = num1[index1]
        let t2 = num2[index2]
        if (t1 === t2) {
            res.add(t2)
            index1++
            index2++
        } else if (t1 > t2) {
            index2++
        } else {
            index1++
        }
    }
    return res
};
// 测试数据
let res = intersection([1, 2, 2, 1], [2, 2, 8, 9, 6, 4, 5])
console.log(res);












