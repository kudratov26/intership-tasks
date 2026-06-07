let a = process.argv.slice(2), r = '', s = a[0] || ''
for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
        let c = s.slice(i, j)
        if (c.length > r.length && a.every(w => w.includes(c))) r = c
    }
}
console.log(r)