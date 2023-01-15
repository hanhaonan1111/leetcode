/**
 * 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。
 * 不要给另外的数组分配额外的空间，你必须原地修改输入数组、
 * 使用 O(1) 的额外空间解决这一问题。
 */

// 法1:API法
var reverseString1 = function (s) {
    return s.reverse()
};

// 法2:指针
function reverseString(s) {
    for (let start = 0, end = s.length - 1; start < end; start++, end--) {
        let other
        other = s[end]
        s[end] = s[start]
        s[start] = other
    }
    return s
}

reverseString(["h", "e", "l", "l", "o"])