let c = 0

function printC() {
    console.log(c)
}

function plus(callback) {
    setTimeout(() => {
        c += 1
        callback(c)
    })
}
plus(printC)

