var globalVariable = 'global'

function outer() {
    var outerVariable = 'outer'
    console.log(globalVariable)
    console.log(outerVariable)
    outerVariable = 'outer3'
    function inner() {
        var innerVariable = 'inner'
        console.log(globalVariable)
        console.log(outerVariable)
        console.log(innerVariable)
    }
    inner()
}
outer()