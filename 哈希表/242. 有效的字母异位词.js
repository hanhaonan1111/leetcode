/**给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。 */

// 法1: 哈希法
var isAnagram1 = function (s, t) {
    let map = new Map()
    for (let i = 97; i < 123; i++) {
        let alpha = String.fromCharCode(i)
        map.set(alpha, 0)
    }
    for (let i = 0, j = 0; i < s.length || j < t.length; i++, j++) {
        const ele1 = s[i]; // +
        map.set(ele1, map.get(ele1) + 1)
        const ele2 = t[j];  //-
        map.set(ele2, map.get(ele2) - 1)
    }
    let values = Array.from(map.values())
    let index = values.find(v => v > 0 || v < 0)
    if (index) {
        return false
    }
    return true
};
//法2
var isAnagram = function (s, t) {
    return s.length === t.length && s.split('').sort().join('') === t.split('').sort().join('')
};




let res = isAnagram("anagram", "nagaram")
console.log(res);