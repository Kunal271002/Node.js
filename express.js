const express = require('express');
const app = express();
app.get('/', (res,req) => {
    return req.end("Hello My name is Kunal Sharma")
});
app.get('/home', (res, req) => {
    return req.end("This is my Home Page");
});
app.listen(8000, () => console.log("Server started"))
