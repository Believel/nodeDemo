var express = require('express')
var app = express()

// var myLogger = function(req, res, next) {
//     console.log('LOGGER')
//     next()
// }

// app.use(myLogger)

// 利用中间件传值
var requestTime = function(req, res, next) {
    req.requestTime = Date.now()
    next()
}
app.use(requestTime)
app.get('/', function(req, res) {
    var responseText = 'Hello World!<br>'
    responseText += '<small>Requested at:'+ req.requestTime+'</small>'
    res.send(responseText)
})
app.listen(3000, () => {
    console.log('it running at 3000')
})