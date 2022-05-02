const gcd = (a, b) => {
    const order = [a, b].sort()
    let c = order[0]
    let d = order[1]
    while (c !== 0) {
        let temp = c
        c = d % c
        d = temp
    }
    return d
}

module.exports = gcd
