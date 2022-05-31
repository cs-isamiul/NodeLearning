const http = require('http');
const {readFileSync} = require("fs");

//get all files
const homePage = readFileSync("./final-my-version-with-some-notes/home-test.html");

//invoked everytime user hits server
const server = http.createServer((req, res)=>{
    
    //home page
    if(req.url === "/"){
        res.writeHead(200, {"content-type":"text/html"});
        res.write(homePage);
    } 
    //about page
    else if(req.url === "/about") {
        res.writeHead(200, {"content-type":"text/html"});
        res.write("<h1>about page</h1>");
    } 
    //page not found
    else {
        res.writeHead(404, {"content-type":"text/html"});
        res.write("<h1>PAGE NOT FOUND</h1>");
    } 

    res.end();
});

//listen on port 5000
server.listen(5000);