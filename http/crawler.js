var http = require('http')
var url = 'http://www.expressjs.com.cn/'

function fiterChapter(html) {
    
}
http.get(url, function(res) {
    var html = ''
    res.on('data', function(data) {
        html += data
    })
    res.on('end', function() {
        fiterChapter(html)
    })
}).on('error', function(e) {
    console.log(`报错：${e.message}`)
})