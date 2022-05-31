const http = require('http');
const {readFileSync} = require("fs");

//get all files
const homePage = readFileSync("./navbar-app/index.html");
const homeStyle = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeScript = readFileSync("./navbar-app/browser-app.js");


//invoked everytime user hits server
const server = http.createServer((req, res)=>{
    
    //home page
    if(req.url === "/"){
        res.writeHead(200, {"content-type":"text/html"});
        res.write(homePage);
    }
    //style
    else if(req.url === "/styles.css"){
        res.writeHead(200, {"content-type":"text/css"});
        res.write(homeStyle);
    }
    //logo
    else if(req.url === "/logo.svg"){
        res.writeHead(200, {"content-type":"image/svg+xml"});
        res.write(homeImage);
    }
    //home script
    else if(req.url === "/browser-app.js"){
        res.writeHead(200, {"content-type":"text/javascript"});
        res.write(homeScript);
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