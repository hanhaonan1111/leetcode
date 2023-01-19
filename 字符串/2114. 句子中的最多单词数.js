/**
 * 一个 句子 由一些 单词 以及它们之间的单个空格组成，句子的开头和结尾不会有多余空格。
给你一个字符串数组 sentences ，其中 sentences[i] 表示单个 句子 。
请你返回单个句子里 单词的最多数目 。 */


function mostWordsFound(s) {
    let res = 0
    for (let val of s) {
        res = Math.max(res, val.split(' ').length)
    }
    return res
};


let res = mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"])
console.log(res);