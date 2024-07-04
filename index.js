const http = require('http');
const fs = require('fs')
const myserver = http.createServer((req, res) => {
    const log = `${Date.now()} ${req.url}: New Req Recieved \n`;
    fs.appendFile('log.txt',log,(err, data) => {
        switch (req.url) {
            case '/':
                res.end("Hello this is Server");                
                break;
            case '/home':
                res.end("homePage");                
                break;
            case '/about':
                res.end("My Name is Kunal Sharma");                
                break;
            default:
                res.end("404");    
                break;
        }
    });
});


myserver.listen(8000, () => console.log("Server started"));

