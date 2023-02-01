/*给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。*/



var combine = function (n, k) {
    let res = []
    function DG(n) {
        let t = []
        if (n === 0) { return }
        for (let i = 0; i < k; i++) {
            t.push([i, n])
        }
        res = t
        return DG(n - 1)
    }
    console.log(res);
    return DG(n)

};


let res = combine(4, 2)
console.log(res);

