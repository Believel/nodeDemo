var http = require('http')
var url = 'http://www.expressjs.com.cn/'

http.get(url, function(res) {
    var html = ''
    res.on('data', function(data) {
        html += data
    })
    res.on('end', function() {
        console.log(html)
    })
}).on('error', function(e) {
    console.log(`报错：${e.message}`)
})