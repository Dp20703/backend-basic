const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url == '/' || req.url == '/home') {
        res.end("Home Page")
    }
    if (req.url == '/about') {
        res.end("About Page")
    }
    if (req.url == '/contact') {
        res.end("Contact Page")
    }
})
server.listen(3000)



