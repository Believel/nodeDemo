var express = require('express')
var cookieSession = require('cookie-session')

var app = express()

app.set('trust proxy', 1)

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
}))

app.get('/', function(req, res){
    // req.session.views = (req.session.views || 0) + 1
    // res.end(req.session.views + 'views')

    // throw new Error('BREAOK')
    
})
app.listen(3000)