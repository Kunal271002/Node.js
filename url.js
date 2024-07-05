const http = require('http'); //For handling Http Request
const fs = require('fs');  //For handling File system to make a log file
const url = require('url');  // For handling URL Request
const myserver = http.createServer((req, res) => {    //To Create server //Handles Request and Response them using end
    const log = `${Date.now()}  ${req.method} ${req.url}: New Req Recieved \n`;     // What should be there in log file 
    const myurl  = url.parse(req.url,true);                         //To take the url and seperate them in Query or Domain name etc 
    fs.appendFile('log.txt',log,(err, data) => {                    //to add them in file Async
        switch (myurl.pathname){
            case '/':
                if(req.method === 'GET') 
                    res.end("Hello this is Server");              
                break;
            case '/home':
                const username = myurl.query.myname;
                res.end(`Hii ${username}`);                
                break;
            case '/about':
                const search = myurl.query.search_query;
                res.end(`Here is you search result ${search}`);                
                break;
            case '/search':
                if(req.method === "GET") 
                    {res.end("This an GET METHOD");}
                else if(res.method === "POST") 
                    res.end("This is an Webpage");
            default:
                res.end("404 Not found");    
                break;
        }
    });
});


myserver.listen(8000, () => console.log("Server started"));

