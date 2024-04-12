const { log } = require("console");
const http = require("http");

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.end('Welcome to my home page')
    }
    if(req.url === '/about'){
        res.end("Here is our history")
    }
    res.end(`
    <h1>Oops!</h1>
    <p>Page Cannot be found</p>
    <a href='/'>Back home</a>
    `)
})

server.listen(5000)
