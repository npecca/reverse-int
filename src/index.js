module.exports = function reverse(n) {
    n = (n > 0) ? n : -n;
    return Number(n.toString().split('').reverse().join(''))
}

