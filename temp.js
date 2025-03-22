const http = require('http')

const server = http.createServer((req, res) =>{
    res.end(req.url)
    if(req.url == '/about'){
        res.end('the about page')
    }    
    if(req.url == '/profile'){
        res.end('the profile page')
    }
    if(req.url == '/'){
        res.end('this is home page')
    }
})

server.listen(3000)

