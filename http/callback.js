function lean(something) {
    console.log(something)
}

function we(callback, something) {
    something += ' is cool'
    callback(something)
}

we(lean, 'node')

we(function(something) {
    console.log(something)
}, 'jade')