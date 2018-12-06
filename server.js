const express = require('express')
const url = require('url')
const querystring = require('querystring')
const app = express()

const myURL = 'https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash'

// console.log(querystring.parse(myURL))
// console.log(url.parse(myURL, true))

// console.log(url.resolve('/one/two', 'three'))
// console.log(url.resolve('http://example.com/one', '/two'))

// console.log(__dirname)
// console.log(__filename)
app.get('/', (req, res) => {
    res.send('hello world')
})
app.get('/user/:id', function (req, res) {
    console.log(req.params.id)
    res.send('POST request to the homepage')
  })
app.listen('4000', () => {
    console.log('it runs at port 4000')
})

