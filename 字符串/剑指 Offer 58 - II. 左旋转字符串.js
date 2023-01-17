/**
 * 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一
 * 个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函
 * 数将返回左旋转两位得到的结果"cdefgab"。
 */


var reverseLeftWords = function (s, n) {
    let prv = s.slice(0, n)
    let after = s.slice(n, s.length)
    return after + prv
};

reverseLeftWords("abcdefg", 2)